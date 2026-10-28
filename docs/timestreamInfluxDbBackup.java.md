# `timestreamInfluxDbBackup` Submodule <a name="`timestreamInfluxDbBackup` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbBackup <a name="TimestreamInfluxDbBackup" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup awscc_timestream_influx_db_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackup;

TimestreamInfluxDbBackup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbResourceId(java.lang.String)
    .name(java.lang.String)
//  .retentionDays(java.lang.Number)
//  .tags(IResolvable|java.util.List<TimestreamInfluxDbBackupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.dbResourceId">dbResourceId</a></code> | <code>java.lang.String</code> | The id of the DB instance or DB cluster to back up. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the backup. Must be unique within the account and region. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The number of days to retain the backup. Valid values are 1 to 3650. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>></code> | A list of key-value pairs to associate with the backup. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbResourceId`<sup>Required</sup> <a name="dbResourceId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.dbResourceId"></a>

- *Type:* java.lang.String

The id of the DB instance or DB cluster to back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#db_resource_id TimestreamInfluxDbBackup#db_resource_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the backup. Must be unique within the account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#name TimestreamInfluxDbBackup#name}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.retentionDays"></a>

- *Type:* java.lang.Number

The number of days to retain the backup. Valid values are 1 to 3650.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#retention_days TimestreamInfluxDbBackup#retention_days}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>>

A list of key-value pairs to associate with the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#tags TimestreamInfluxDbBackup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TimestreamInfluxDbBackupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>>

---

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackup;

TimestreamInfluxDbBackup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackup;

TimestreamInfluxDbBackup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackup;

TimestreamInfluxDbBackup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackup;

TimestreamInfluxDbBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TimestreamInfluxDbBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TimestreamInfluxDbBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TimestreamInfluxDbBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.clusterConfiguration">clusterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference">TimestreamInfluxDbBackupClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbParameterGroupId">dbParameterGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.expiresAfter">expiresAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxDbBackupId">influxDbBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference">TimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList">TimestreamInfluxDbBackupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceIdInput">dbResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceId">dbResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterConfiguration`<sup>Required</sup> <a name="clusterConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.clusterConfiguration"></a>

```java
public TimestreamInfluxDbBackupClusterConfigurationOutputReference getClusterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference">TimestreamInfluxDbBackupClusterConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupId`<sup>Required</sup> <a name="dbParameterGroupId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbParameterGroupId"></a>

```java
public java.lang.String getDbParameterGroupId();
```

- *Type:* java.lang.String

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `expiresAfter`<sup>Required</sup> <a name="expiresAfter" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.expiresAfter"></a>

```java
public java.lang.String getExpiresAfter();
```

- *Type:* java.lang.String

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxAuthParametersSecretArn"></a>

```java
public java.lang.String getInfluxAuthParametersSecretArn();
```

- *Type:* java.lang.String

---

##### `influxDbBackupId`<sup>Required</sup> <a name="influxDbBackupId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxDbBackupId"></a>

```java
public java.lang.String getInfluxDbBackupId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.logDeliveryConfiguration"></a>

```java
public TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.maintenanceSchedule"></a>

```java
public TimestreamInfluxDbBackupMaintenanceScheduleOutputReference getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference">TimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a>

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.publiclyAccessible"></a>

```java
public IResolvable getPubliclyAccessible();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tags"></a>

```java
public TimestreamInfluxDbBackupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList">TimestreamInfluxDbBackupTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbResourceIdInput`<sup>Optional</sup> <a name="dbResourceIdInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceIdInput"></a>

```java
public java.lang.String getDbResourceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TimestreamInfluxDbBackupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>>

---

##### `dbResourceId`<sup>Required</sup> <a name="dbResourceId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceId"></a>

```java
public java.lang.String getDbResourceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbBackupClusterConfiguration <a name="TimestreamInfluxDbBackupClusterConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupClusterConfiguration;

TimestreamInfluxDbBackupClusterConfiguration.builder()
    .build();
```


### TimestreamInfluxDbBackupConfig <a name="TimestreamInfluxDbBackupConfig" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupConfig;

TimestreamInfluxDbBackupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbResourceId(java.lang.String)
    .name(java.lang.String)
//  .retentionDays(java.lang.Number)
//  .tags(IResolvable|java.util.List<TimestreamInfluxDbBackupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dbResourceId">dbResourceId</a></code> | <code>java.lang.String</code> | The id of the DB instance or DB cluster to back up. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the backup. Must be unique within the account and region. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The number of days to retain the backup. Valid values are 1 to 3650. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>></code> | A list of key-value pairs to associate with the backup. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbResourceId`<sup>Required</sup> <a name="dbResourceId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dbResourceId"></a>

```java
public java.lang.String getDbResourceId();
```

- *Type:* java.lang.String

The id of the DB instance or DB cluster to back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#db_resource_id TimestreamInfluxDbBackup#db_resource_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the backup. Must be unique within the account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#name TimestreamInfluxDbBackup#name}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

The number of days to retain the backup. Valid values are 1 to 3650.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#retention_days TimestreamInfluxDbBackup#retention_days}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TimestreamInfluxDbBackupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>>

A list of key-value pairs to associate with the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#tags TimestreamInfluxDbBackup#tags}

---

### TimestreamInfluxDbBackupLogDeliveryConfiguration <a name="TimestreamInfluxDbBackupLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupLogDeliveryConfiguration;

TimestreamInfluxDbBackupLogDeliveryConfiguration.builder()
    .build();
```


### TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration;

TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration.builder()
    .build();
```


### TimestreamInfluxDbBackupMaintenanceSchedule <a name="TimestreamInfluxDbBackupMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupMaintenanceSchedule;

TimestreamInfluxDbBackupMaintenanceSchedule.builder()
    .build();
```


### TimestreamInfluxDbBackupTags <a name="TimestreamInfluxDbBackupTags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupTags;

TimestreamInfluxDbBackupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#key TimestreamInfluxDbBackup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#value TimestreamInfluxDbBackup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbBackupClusterConfigurationOutputReference <a name="TimestreamInfluxDbBackupClusterConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupClusterConfigurationOutputReference;

new TimestreamInfluxDbBackupClusterConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor">dedicatedCompactor</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances">ingestQueryInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances">queryOnlyInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration">TimestreamInfluxDbBackupClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dedicatedCompactor`<sup>Required</sup> <a name="dedicatedCompactor" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor"></a>

```java
public IResolvable getDedicatedCompactor();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ingestQueryInstances`<sup>Required</sup> <a name="ingestQueryInstances" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances"></a>

```java
public java.lang.Number getIngestQueryInstances();
```

- *Type:* java.lang.Number

---

##### `queryOnlyInstances`<sup>Required</sup> <a name="queryOnlyInstances" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances"></a>

```java
public java.lang.Number getQueryOnlyInstances();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue"></a>

```java
public TimestreamInfluxDbBackupClusterConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration">TimestreamInfluxDbBackupClusterConfiguration</a>

---


### TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference;

new TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration">TimestreamInfluxDbBackupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```java
public TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public TimestreamInfluxDbBackupLogDeliveryConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration">TimestreamInfluxDbBackupLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference;

new TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbBackupMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbBackupMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference;

new TimestreamInfluxDbBackupMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule">TimestreamInfluxDbBackupMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public TimestreamInfluxDbBackupMaintenanceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule">TimestreamInfluxDbBackupMaintenanceSchedule</a>

---


### TimestreamInfluxDbBackupTagsList <a name="TimestreamInfluxDbBackupTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupTagsList;

new TimestreamInfluxDbBackupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.get"></a>

```java
public TimestreamInfluxDbBackupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamInfluxDbBackupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>>

---


### TimestreamInfluxDbBackupTagsOutputReference <a name="TimestreamInfluxDbBackupTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_influx_db_backup.TimestreamInfluxDbBackupTagsOutputReference;

new TimestreamInfluxDbBackupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamInfluxDbBackupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>

---



