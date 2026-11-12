# `backupBackupAccessPoint` Submodule <a name="`backupBackupAccessPoint` Submodule" id="@cdktn/provider-awscc.backupBackupAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupAccessPoint <a name="BackupBackupAccessPoint" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point awscc_backup_backup_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPoint;

BackupBackupAccessPoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .recoveryPointArn(java.lang.String)
//  .accessPointInTime(java.lang.String)
//  .accessPointPolicy(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<BackupBackupAccessPointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.recoveryPointArn">recoveryPointArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.accessPointInTime">accessPointInTime</a></code> | <code>java.lang.String</code> | For continuous (point-in-time) recovery points, the timestamp in ISO 8601 format (for example 2021-11-27T03:30:27Z) that determines the point-in-time view of the backup data. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.accessPointPolicy">accessPointPolicy</a></code> | <code>java.lang.String</code> | An optional resource-based policy document, in JSON, to apply to the underlying Amazon S3 access point. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the backup access point. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>></code> | The tags to assign to the backup access point. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `recoveryPointArn`<sup>Required</sup> <a name="recoveryPointArn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.recoveryPointArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point.

The recovery point must be an Amazon S3 recovery point in the AVAILABLE, STOPPED, or COMPLETED state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#recovery_point_arn BackupBackupAccessPoint#recovery_point_arn}

---

##### `accessPointInTime`<sup>Optional</sup> <a name="accessPointInTime" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.accessPointInTime"></a>

- *Type:* java.lang.String

For continuous (point-in-time) recovery points, the timestamp in ISO 8601 format (for example 2021-11-27T03:30:27Z) that determines the point-in-time view of the backup data.

The timestamp must be within the continuous backup's retention period at the time the access point is created. Do not specify this for snapshot recovery points. The service reports it back under AccessPointMetadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#access_point_in_time BackupBackupAccessPoint#access_point_in_time}

---

##### `accessPointPolicy`<sup>Optional</sup> <a name="accessPointPolicy" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.accessPointPolicy"></a>

- *Type:* java.lang.String

An optional resource-based policy document, in JSON, to apply to the underlying Amazon S3 access point.

The policy controls how backup data can be accessed through the access point. If you do not specify a policy, access is governed by the caller's IAM permissions. The serialized policy may not exceed 200000 characters. This value is not returned by the service and cannot be updated in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#access_point_policy BackupBackupAccessPoint#access_point_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the backup access point.

This name is shared with the Amazon S3 access point namespace. It must be unique within your account and Region and cannot conflict with an existing Amazon S3 access point. If omitted, a name is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#name BackupBackupAccessPoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>>

The tags to assign to the backup access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#tags BackupBackupAccessPoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetAccessPointInTime">resetAccessPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetAccessPointPolicy">resetAccessPointPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BackupBackupAccessPointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>>

---

##### `resetAccessPointInTime` <a name="resetAccessPointInTime" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetAccessPointInTime"></a>

```java
public void resetAccessPointInTime()
```

##### `resetAccessPointPolicy` <a name="resetAccessPointPolicy" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetAccessPointPolicy"></a>

```java
public void resetAccessPointPolicy()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPoint;

BackupBackupAccessPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPoint;

BackupBackupAccessPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPoint;

BackupBackupAccessPoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPoint;

BackupBackupAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupBackupAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupBackupAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupBackupAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupBackupAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointMetadata">accessPointMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference">BackupBackupAccessPointAccessPointMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.backupVaultArn">backupVaultArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.backupVaultName">backupVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList">BackupBackupAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointInTimeInput">accessPointInTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointPolicyInput">accessPointPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.recoveryPointArnInput">recoveryPointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointInTime">accessPointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointPolicy">accessPointPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.recoveryPointArn">recoveryPointArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPointMetadata`<sup>Required</sup> <a name="accessPointMetadata" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointMetadata"></a>

```java
public BackupBackupAccessPointAccessPointMetadataOutputReference getAccessPointMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference">BackupBackupAccessPointAccessPointMetadataOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `backupVaultArn`<sup>Required</sup> <a name="backupVaultArn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.backupVaultArn"></a>

```java
public java.lang.String getBackupVaultArn();
```

- *Type:* java.lang.String

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.backupVaultName"></a>

```java
public java.lang.String getBackupVaultName();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.tags"></a>

```java
public BackupBackupAccessPointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList">BackupBackupAccessPointTagsList</a>

---

##### `accessPointInTimeInput`<sup>Optional</sup> <a name="accessPointInTimeInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointInTimeInput"></a>

```java
public java.lang.String getAccessPointInTimeInput();
```

- *Type:* java.lang.String

---

##### `accessPointPolicyInput`<sup>Optional</sup> <a name="accessPointPolicyInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointPolicyInput"></a>

```java
public java.lang.String getAccessPointPolicyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryPointArnInput`<sup>Optional</sup> <a name="recoveryPointArnInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.recoveryPointArnInput"></a>

```java
public java.lang.String getRecoveryPointArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BackupBackupAccessPointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>>

---

##### `accessPointInTime`<sup>Required</sup> <a name="accessPointInTime" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointInTime"></a>

```java
public java.lang.String getAccessPointInTime();
```

- *Type:* java.lang.String

---

##### `accessPointPolicy`<sup>Required</sup> <a name="accessPointPolicy" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.accessPointPolicy"></a>

```java
public java.lang.String getAccessPointPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryPointArn`<sup>Required</sup> <a name="recoveryPointArn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.recoveryPointArn"></a>

```java
public java.lang.String getRecoveryPointArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupAccessPointAccessPointMetadata <a name="BackupBackupAccessPointAccessPointMetadata" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPointAccessPointMetadata;

BackupBackupAccessPointAccessPointMetadata.builder()
    .build();
```


### BackupBackupAccessPointConfig <a name="BackupBackupAccessPointConfig" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPointConfig;

BackupBackupAccessPointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .recoveryPointArn(java.lang.String)
//  .accessPointInTime(java.lang.String)
//  .accessPointPolicy(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<BackupBackupAccessPointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.recoveryPointArn">recoveryPointArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.accessPointInTime">accessPointInTime</a></code> | <code>java.lang.String</code> | For continuous (point-in-time) recovery points, the timestamp in ISO 8601 format (for example 2021-11-27T03:30:27Z) that determines the point-in-time view of the backup data. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.accessPointPolicy">accessPointPolicy</a></code> | <code>java.lang.String</code> | An optional resource-based policy document, in JSON, to apply to the underlying Amazon S3 access point. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the backup access point. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>></code> | The tags to assign to the backup access point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `recoveryPointArn`<sup>Required</sup> <a name="recoveryPointArn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.recoveryPointArn"></a>

```java
public java.lang.String getRecoveryPointArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point.

The recovery point must be an Amazon S3 recovery point in the AVAILABLE, STOPPED, or COMPLETED state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#recovery_point_arn BackupBackupAccessPoint#recovery_point_arn}

---

##### `accessPointInTime`<sup>Optional</sup> <a name="accessPointInTime" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.accessPointInTime"></a>

```java
public java.lang.String getAccessPointInTime();
```

- *Type:* java.lang.String

For continuous (point-in-time) recovery points, the timestamp in ISO 8601 format (for example 2021-11-27T03:30:27Z) that determines the point-in-time view of the backup data.

The timestamp must be within the continuous backup's retention period at the time the access point is created. Do not specify this for snapshot recovery points. The service reports it back under AccessPointMetadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#access_point_in_time BackupBackupAccessPoint#access_point_in_time}

---

##### `accessPointPolicy`<sup>Optional</sup> <a name="accessPointPolicy" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.accessPointPolicy"></a>

```java
public java.lang.String getAccessPointPolicy();
```

- *Type:* java.lang.String

An optional resource-based policy document, in JSON, to apply to the underlying Amazon S3 access point.

The policy controls how backup data can be accessed through the access point. If you do not specify a policy, access is governed by the caller's IAM permissions. The serialized policy may not exceed 200000 characters. This value is not returned by the service and cannot be updated in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#access_point_policy BackupBackupAccessPoint#access_point_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the backup access point.

This name is shared with the Amazon S3 access point namespace. It must be unique within your account and Region and cannot conflict with an existing Amazon S3 access point. If omitted, a name is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#name BackupBackupAccessPoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BackupBackupAccessPointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>>

The tags to assign to the backup access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#tags BackupBackupAccessPoint#tags}

---

### BackupBackupAccessPointTags <a name="BackupBackupAccessPointTags" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPointTags;

BackupBackupAccessPointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#key BackupBackupAccessPoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#value BackupBackupAccessPoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupAccessPointAccessPointMetadataOutputReference <a name="BackupBackupAccessPointAccessPointMetadataOutputReference" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPointAccessPointMetadataOutputReference;

new BackupBackupAccessPointAccessPointMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.accessPointInTime">accessPointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.s3AccessPointAlias">s3AccessPointAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.s3AccessPointArn">s3AccessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadata">BackupBackupAccessPointAccessPointMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPointInTime`<sup>Required</sup> <a name="accessPointInTime" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.accessPointInTime"></a>

```java
public java.lang.String getAccessPointInTime();
```

- *Type:* java.lang.String

---

##### `s3AccessPointAlias`<sup>Required</sup> <a name="s3AccessPointAlias" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.s3AccessPointAlias"></a>

```java
public java.lang.String getS3AccessPointAlias();
```

- *Type:* java.lang.String

---

##### `s3AccessPointArn`<sup>Required</sup> <a name="s3AccessPointArn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.s3AccessPointArn"></a>

```java
public java.lang.String getS3AccessPointArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadataOutputReference.property.internalValue"></a>

```java
public BackupBackupAccessPointAccessPointMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointAccessPointMetadata">BackupBackupAccessPointAccessPointMetadata</a>

---


### BackupBackupAccessPointTagsList <a name="BackupBackupAccessPointTagsList" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPointTagsList;

new BackupBackupAccessPointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.get"></a>

```java
public BackupBackupAccessPointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupBackupAccessPointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>>

---


### BackupBackupAccessPointTagsOutputReference <a name="BackupBackupAccessPointTagsOutputReference" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_backup_access_point.BackupBackupAccessPointTagsOutputReference;

new BackupBackupAccessPointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupBackupAccessPointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupAccessPoint.BackupBackupAccessPointTags">BackupBackupAccessPointTags</a>

---



