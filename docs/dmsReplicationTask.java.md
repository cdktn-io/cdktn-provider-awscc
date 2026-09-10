# `dmsReplicationTask` Submodule <a name="`dmsReplicationTask` Submodule" id="@cdktn/provider-awscc.dmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationTask <a name="DmsReplicationTask" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task awscc_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .migrationType(java.lang.String)
    .replicationInstanceArn(java.lang.String)
    .sourceEndpointArn(java.lang.String)
    .tableMappings(java.lang.String)
    .targetEndpointArn(java.lang.String)
//  .cdcStartPosition(java.lang.String)
//  .cdcStartTime(java.lang.Number)
//  .cdcStopPosition(java.lang.String)
//  .replicationTaskIdentifier(java.lang.String)
//  .replicationTaskSettings(java.lang.String)
//  .resourceIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<DmsReplicationTaskTags>)
//  .taskData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType">migrationType</a></code> | <code>java.lang.String</code> | The migration type. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn">sourceEndpointArn</a></code> | <code>java.lang.String</code> | An Amazon Resource Name (ARN) that uniquely identifies the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings">tableMappings</a></code> | <code>java.lang.String</code> | The table mappings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn">targetEndpointArn</a></code> | <code>java.lang.String</code> | An Amazon Resource Name (ARN) that uniquely identifies the target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | Indicates when you want a change data capture (CDC) operation to start. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.Number</code> | Indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStopPosition">cdcStopPosition</a></code> | <code>java.lang.String</code> | Indicates when you want a change data capture (CDC) operation to stop. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskIdentifier">replicationTaskIdentifier</a></code> | <code>java.lang.String</code> | An identifier for the replication task. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings">replicationTaskSettings</a></code> | <code>java.lang.String</code> | Overall settings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.taskData">taskData</a></code> | <code>java.lang.String</code> | Supplemental information that the task requires to migrate the data for certain source and target endpoints. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType"></a>

- *Type:* java.lang.String

The migration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn"></a>

- *Type:* java.lang.String

An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings"></a>

- *Type:* java.lang.String

The table mappings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn"></a>

- *Type:* java.lang.String

An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="cdcStartPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition"></a>

- *Type:* java.lang.String

Indicates when you want a change data capture (CDC) operation to start.

Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}

---

##### `cdcStartTime`<sup>Optional</sup> <a name="cdcStartTime" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime"></a>

- *Type:* java.lang.Number

Indicates the start time for a change data capture (CDC) operation.

Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}

---

##### `cdcStopPosition`<sup>Optional</sup> <a name="cdcStopPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStopPosition"></a>

- *Type:* java.lang.String

Indicates when you want a change data capture (CDC) operation to stop.

The value can be either server time or commit time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_stop_position DmsReplicationTask#cdc_stop_position}

---

##### `replicationTaskIdentifier`<sup>Optional</sup> <a name="replicationTaskIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskIdentifier"></a>

- *Type:* java.lang.String

An identifier for the replication task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_identifier DmsReplicationTask#replication_task_identifier}

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="replicationTaskSettings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings"></a>

- *Type:* java.lang.String

Overall settings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.resourceIdentifier"></a>

- *Type:* java.lang.String

A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `taskData`<sup>Optional</sup> <a name="taskData" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.taskData"></a>

- *Type:* java.lang.String

Supplemental information that the task requires to migrate the data for certain source and target endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#task_data DmsReplicationTask#task_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition">resetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime">resetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStopPosition">resetCdcStopPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskIdentifier">resetReplicationTaskIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings">resetReplicationTaskSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTaskData">resetTaskData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DmsReplicationTaskTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>>

---

##### `resetCdcStartPosition` <a name="resetCdcStartPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition"></a>

```java
public void resetCdcStartPosition()
```

##### `resetCdcStartTime` <a name="resetCdcStartTime" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime"></a>

```java
public void resetCdcStartTime()
```

##### `resetCdcStopPosition` <a name="resetCdcStopPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetCdcStopPosition"></a>

```java
public void resetCdcStopPosition()
```

##### `resetReplicationTaskIdentifier` <a name="resetReplicationTaskIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskIdentifier"></a>

```java
public void resetReplicationTaskIdentifier()
```

##### `resetReplicationTaskSettings` <a name="resetReplicationTaskSettings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings"></a>

```java
public void resetReplicationTaskSettings()
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetResourceIdentifier"></a>

```java
public void resetResourceIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskData` <a name="resetTaskData" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.resetTaskData"></a>

```java
public void resetTaskData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsReplicationTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsReplicationTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsReplicationTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsReplicationTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsReplicationTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn">replicationTaskArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList">DmsReplicationTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput">cdcStartPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput">cdcStartTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPositionInput">cdcStopPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput">migrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput">replicationInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifierInput">replicationTaskIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput">replicationTaskSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput">sourceEndpointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput">tableMappingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput">targetEndpointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskDataInput">taskDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPosition">cdcStopPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationType">migrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifier">replicationTaskIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappings">tableMappings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn">targetEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskData">taskData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `replicationTaskArn`<sup>Required</sup> <a name="replicationTaskArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn"></a>

```java
public java.lang.String getReplicationTaskArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tags"></a>

```java
public DmsReplicationTaskTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList">DmsReplicationTaskTagsList</a>

---

##### `cdcStartPositionInput`<sup>Optional</sup> <a name="cdcStartPositionInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput"></a>

```java
public java.lang.String getCdcStartPositionInput();
```

- *Type:* java.lang.String

---

##### `cdcStartTimeInput`<sup>Optional</sup> <a name="cdcStartTimeInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput"></a>

```java
public java.lang.Number getCdcStartTimeInput();
```

- *Type:* java.lang.Number

---

##### `cdcStopPositionInput`<sup>Optional</sup> <a name="cdcStopPositionInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPositionInput"></a>

```java
public java.lang.String getCdcStopPositionInput();
```

- *Type:* java.lang.String

---

##### `migrationTypeInput`<sup>Optional</sup> <a name="migrationTypeInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput"></a>

```java
public java.lang.String getMigrationTypeInput();
```

- *Type:* java.lang.String

---

##### `replicationInstanceArnInput`<sup>Optional</sup> <a name="replicationInstanceArnInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput"></a>

```java
public java.lang.String getReplicationInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `replicationTaskIdentifierInput`<sup>Optional</sup> <a name="replicationTaskIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifierInput"></a>

```java
public java.lang.String getReplicationTaskIdentifierInput();
```

- *Type:* java.lang.String

---

##### `replicationTaskSettingsInput`<sup>Optional</sup> <a name="replicationTaskSettingsInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput"></a>

```java
public java.lang.String getReplicationTaskSettingsInput();
```

- *Type:* java.lang.String

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifierInput"></a>

```java
public java.lang.String getResourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceEndpointArnInput`<sup>Optional</sup> <a name="sourceEndpointArnInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput"></a>

```java
public java.lang.String getSourceEndpointArnInput();
```

- *Type:* java.lang.String

---

##### `tableMappingsInput`<sup>Optional</sup> <a name="tableMappingsInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput"></a>

```java
public java.lang.String getTableMappingsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DmsReplicationTaskTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>>

---

##### `targetEndpointArnInput`<sup>Optional</sup> <a name="targetEndpointArnInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput"></a>

```java
public java.lang.String getTargetEndpointArnInput();
```

- *Type:* java.lang.String

---

##### `taskDataInput`<sup>Optional</sup> <a name="taskDataInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskDataInput"></a>

```java
public java.lang.String getTaskDataInput();
```

- *Type:* java.lang.String

---

##### `cdcStartPosition`<sup>Required</sup> <a name="cdcStartPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition"></a>

```java
public java.lang.String getCdcStartPosition();
```

- *Type:* java.lang.String

---

##### `cdcStartTime`<sup>Required</sup> <a name="cdcStartTime" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime"></a>

```java
public java.lang.Number getCdcStartTime();
```

- *Type:* java.lang.Number

---

##### `cdcStopPosition`<sup>Required</sup> <a name="cdcStopPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.cdcStopPosition"></a>

```java
public java.lang.String getCdcStopPosition();
```

- *Type:* java.lang.String

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.migrationType"></a>

```java
public java.lang.String getMigrationType();
```

- *Type:* java.lang.String

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn"></a>

```java
public java.lang.String getReplicationInstanceArn();
```

- *Type:* java.lang.String

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="replicationTaskIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdentifier"></a>

```java
public java.lang.String getReplicationTaskIdentifier();
```

- *Type:* java.lang.String

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="replicationTaskSettings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings"></a>

```java
public java.lang.String getReplicationTaskSettings();
```

- *Type:* java.lang.String

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn"></a>

```java
public java.lang.String getSourceEndpointArn();
```

- *Type:* java.lang.String

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tableMappings"></a>

```java
public java.lang.String getTableMappings();
```

- *Type:* java.lang.String

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn"></a>

```java
public java.lang.String getTargetEndpointArn();
```

- *Type:* java.lang.String

---

##### `taskData`<sup>Required</sup> <a name="taskData" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.taskData"></a>

```java
public java.lang.String getTaskData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationTaskConfig <a name="DmsReplicationTaskConfig" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTaskConfig;

DmsReplicationTaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .migrationType(java.lang.String)
    .replicationInstanceArn(java.lang.String)
    .sourceEndpointArn(java.lang.String)
    .tableMappings(java.lang.String)
    .targetEndpointArn(java.lang.String)
//  .cdcStartPosition(java.lang.String)
//  .cdcStartTime(java.lang.Number)
//  .cdcStopPosition(java.lang.String)
//  .replicationTaskIdentifier(java.lang.String)
//  .replicationTaskSettings(java.lang.String)
//  .resourceIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<DmsReplicationTaskTags>)
//  .taskData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType">migrationType</a></code> | <code>java.lang.String</code> | The migration type. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>java.lang.String</code> | An Amazon Resource Name (ARN) that uniquely identifies the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings">tableMappings</a></code> | <code>java.lang.String</code> | The table mappings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn">targetEndpointArn</a></code> | <code>java.lang.String</code> | An Amazon Resource Name (ARN) that uniquely identifies the target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | Indicates when you want a change data capture (CDC) operation to start. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.Number</code> | Indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStopPosition">cdcStopPosition</a></code> | <code>java.lang.String</code> | Indicates when you want a change data capture (CDC) operation to stop. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskIdentifier">replicationTaskIdentifier</a></code> | <code>java.lang.String</code> | An identifier for the replication task. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>java.lang.String</code> | Overall settings for the task, in JSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.taskData">taskData</a></code> | <code>java.lang.String</code> | Supplemental information that the task requires to migrate the data for certain source and target endpoints. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType"></a>

```java
public java.lang.String getMigrationType();
```

- *Type:* java.lang.String

The migration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn"></a>

```java
public java.lang.String getReplicationInstanceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn"></a>

```java
public java.lang.String getSourceEndpointArn();
```

- *Type:* java.lang.String

An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings"></a>

```java
public java.lang.String getTableMappings();
```

- *Type:* java.lang.String

The table mappings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn"></a>

```java
public java.lang.String getTargetEndpointArn();
```

- *Type:* java.lang.String

An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="cdcStartPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition"></a>

```java
public java.lang.String getCdcStartPosition();
```

- *Type:* java.lang.String

Indicates when you want a change data capture (CDC) operation to start.

Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}

---

##### `cdcStartTime`<sup>Optional</sup> <a name="cdcStartTime" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime"></a>

```java
public java.lang.Number getCdcStartTime();
```

- *Type:* java.lang.Number

Indicates the start time for a change data capture (CDC) operation.

Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}

---

##### `cdcStopPosition`<sup>Optional</sup> <a name="cdcStopPosition" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStopPosition"></a>

```java
public java.lang.String getCdcStopPosition();
```

- *Type:* java.lang.String

Indicates when you want a change data capture (CDC) operation to stop.

The value can be either server time or commit time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_stop_position DmsReplicationTask#cdc_stop_position}

---

##### `replicationTaskIdentifier`<sup>Optional</sup> <a name="replicationTaskIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskIdentifier"></a>

```java
public java.lang.String getReplicationTaskIdentifier();
```

- *Type:* java.lang.String

An identifier for the replication task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_identifier DmsReplicationTask#replication_task_identifier}

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="replicationTaskSettings" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings"></a>

```java
public java.lang.String getReplicationTaskSettings();
```

- *Type:* java.lang.String

Overall settings for the task, in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DmsReplicationTaskTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `taskData`<sup>Optional</sup> <a name="taskData" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskConfig.property.taskData"></a>

```java
public java.lang.String getTaskData();
```

- *Type:* java.lang.String

Supplemental information that the task requires to migrate the data for certain source and target endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#task_data DmsReplicationTask#task_data}

---

### DmsReplicationTaskTags <a name="DmsReplicationTaskTags" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTaskTags;

DmsReplicationTaskTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#key DmsReplicationTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#value DmsReplicationTask#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationTaskTagsList <a name="DmsReplicationTaskTagsList" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTaskTagsList;

new DmsReplicationTaskTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.get"></a>

```java
public DmsReplicationTaskTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsReplicationTaskTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>>

---


### DmsReplicationTaskTagsOutputReference <a name="DmsReplicationTaskTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_task.DmsReplicationTaskTagsOutputReference;

new DmsReplicationTaskTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsReplicationTaskTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationTask.DmsReplicationTaskTags">DmsReplicationTaskTags</a>

---



