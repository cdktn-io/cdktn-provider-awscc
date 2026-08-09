# `timestreamScheduledQuery` Submodule <a name="`timestreamScheduledQuery` Submodule" id="@cdktn/provider-awscc.timestreamScheduledQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamScheduledQuery <a name="TimestreamScheduledQuery" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query awscc_timestream_scheduled_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQuery;

TimestreamScheduledQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .errorReportConfiguration(TimestreamScheduledQueryErrorReportConfiguration)
    .notificationConfiguration(TimestreamScheduledQueryNotificationConfiguration)
    .queryString(java.lang.String)
    .scheduleConfiguration(TimestreamScheduledQueryScheduleConfiguration)
    .scheduledQueryExecutionRoleArn(java.lang.String)
//  .clientToken(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .scheduledQueryName(java.lang.String)
//  .tags(IResolvable|java.util.List<TimestreamScheduledQueryTags>)
//  .targetConfiguration(TimestreamScheduledQueryTargetConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.errorReportConfiguration">errorReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | Notification configuration for the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.queryString">queryString</a></code> | <code>java.lang.String</code> | The query string to run. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | Configuration for when the scheduled query is executed. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scheduledQueryExecutionRoleArn">scheduledQueryExecutionRoleArn</a></code> | <code>java.lang.String</code> | The ARN for the IAM role that Timestream will assume when running the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon KMS key used to encrypt the scheduled query resource, at-rest. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scheduledQueryName">scheduledQueryName</a></code> | <code>java.lang.String</code> | The name of the scheduled query. Scheduled query names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>></code> | A list of key-value pairs to label the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | Configuration of target store where scheduled query results are written to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `errorReportConfiguration`<sup>Required</sup> <a name="errorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.errorReportConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#error_report_configuration TimestreamScheduledQuery#error_report_configuration}

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.notificationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

Notification configuration for the scheduled query.

A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#notification_configuration TimestreamScheduledQuery#notification_configuration}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.queryString"></a>

- *Type:* java.lang.String

The query string to run.

Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scheduleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

Configuration for when the scheduled query is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#schedule_configuration TimestreamScheduledQuery#schedule_configuration}

---

##### `scheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="scheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scheduledQueryExecutionRoleArn"></a>

- *Type:* java.lang.String

The ARN for the IAM role that Timestream will assume when running the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#scheduled_query_execution_role_arn TimestreamScheduledQuery#scheduled_query_execution_role_arn}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result.

Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#client_token TimestreamScheduledQuery#client_token}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The Amazon KMS key used to encrypt the scheduled query resource, at-rest.

If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#kms_key_id TimestreamScheduledQuery#kms_key_id}

---

##### `scheduledQueryName`<sup>Optional</sup> <a name="scheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.scheduledQueryName"></a>

- *Type:* java.lang.String

The name of the scheduled query. Scheduled query names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#scheduled_query_name TimestreamScheduledQuery#scheduled_query_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>>

A list of key-value pairs to label the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#tags TimestreamScheduledQuery#tags}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.Initializer.parameter.targetConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

Configuration of target store where scheduled query results are written to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#target_configuration TimestreamScheduledQuery#target_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putErrorReportConfiguration">putErrorReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putNotificationConfiguration">putNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putScheduleConfiguration">putScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTargetConfiguration">putTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetScheduledQueryName">resetScheduledQueryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTargetConfiguration">resetTargetConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorReportConfiguration` <a name="putErrorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putErrorReportConfiguration"></a>

```java
public void putErrorReportConfiguration(TimestreamScheduledQueryErrorReportConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putErrorReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

---

##### `putNotificationConfiguration` <a name="putNotificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putNotificationConfiguration"></a>

```java
public void putNotificationConfiguration(TimestreamScheduledQueryNotificationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

---

##### `putScheduleConfiguration` <a name="putScheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putScheduleConfiguration"></a>

```java
public void putScheduleConfiguration(TimestreamScheduledQueryScheduleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TimestreamScheduledQueryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>>

---

##### `putTargetConfiguration` <a name="putTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTargetConfiguration"></a>

```java
public void putTargetConfiguration(TimestreamScheduledQueryTargetConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetScheduledQueryName` <a name="resetScheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetScheduledQueryName"></a>

```java
public void resetScheduledQueryName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetConfiguration` <a name="resetTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.resetTargetConfiguration"></a>

```java
public void resetTargetConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamScheduledQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQuery;

TimestreamScheduledQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQuery;

TimestreamScheduledQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQuery;

TimestreamScheduledQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQuery;

TimestreamScheduledQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TimestreamScheduledQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TimestreamScheduledQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TimestreamScheduledQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TimestreamScheduledQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamScheduledQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfiguration">errorReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference">TimestreamScheduledQueryScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqErrorReportConfiguration">sqErrorReportConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqKmsKeyId">sqKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqName">sqName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqNotificationConfiguration">sqNotificationConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqQueryString">sqQueryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduleConfiguration">sqScheduleConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduledQueryExecutionRoleArn">sqScheduledQueryExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqTargetConfiguration">sqTargetConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList">TimestreamScheduledQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfigurationInput">errorReportConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfigurationInput">notificationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfigurationInput">scheduleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArnInput">scheduledQueryExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryNameInput">scheduledQueryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfigurationInput">targetConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArn">scheduledQueryExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryName">scheduledQueryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `errorReportConfiguration`<sup>Required</sup> <a name="errorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfiguration"></a>

```java
public TimestreamScheduledQueryErrorReportConfigurationOutputReference getErrorReportConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfiguration"></a>

```java
public TimestreamScheduledQueryNotificationConfigurationOutputReference getNotificationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationOutputReference</a>

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfiguration"></a>

```java
public TimestreamScheduledQueryScheduleConfigurationOutputReference getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference">TimestreamScheduledQueryScheduleConfigurationOutputReference</a>

---

##### `sqErrorReportConfiguration`<sup>Required</sup> <a name="sqErrorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqErrorReportConfiguration"></a>

```java
public java.lang.String getSqErrorReportConfiguration();
```

- *Type:* java.lang.String

---

##### `sqKmsKeyId`<sup>Required</sup> <a name="sqKmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqKmsKeyId"></a>

```java
public java.lang.String getSqKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sqName`<sup>Required</sup> <a name="sqName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqName"></a>

```java
public java.lang.String getSqName();
```

- *Type:* java.lang.String

---

##### `sqNotificationConfiguration`<sup>Required</sup> <a name="sqNotificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqNotificationConfiguration"></a>

```java
public java.lang.String getSqNotificationConfiguration();
```

- *Type:* java.lang.String

---

##### `sqQueryString`<sup>Required</sup> <a name="sqQueryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqQueryString"></a>

```java
public java.lang.String getSqQueryString();
```

- *Type:* java.lang.String

---

##### `sqScheduleConfiguration`<sup>Required</sup> <a name="sqScheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduleConfiguration"></a>

```java
public java.lang.String getSqScheduleConfiguration();
```

- *Type:* java.lang.String

---

##### `sqScheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="sqScheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqScheduledQueryExecutionRoleArn"></a>

```java
public java.lang.String getSqScheduledQueryExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `sqTargetConfiguration`<sup>Required</sup> <a name="sqTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.sqTargetConfiguration"></a>

```java
public java.lang.String getSqTargetConfiguration();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tags"></a>

```java
public TimestreamScheduledQueryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList">TimestreamScheduledQueryTagsList</a>

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfiguration"></a>

```java
public TimestreamScheduledQueryTargetConfigurationOutputReference getTargetConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationOutputReference</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `errorReportConfigurationInput`<sup>Optional</sup> <a name="errorReportConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.errorReportConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryErrorReportConfiguration getErrorReportConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigurationInput`<sup>Optional</sup> <a name="notificationConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.notificationConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryNotificationConfiguration getNotificationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `scheduleConfigurationInput`<sup>Optional</sup> <a name="scheduleConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduleConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryScheduleConfiguration getScheduleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

---

##### `scheduledQueryExecutionRoleArnInput`<sup>Optional</sup> <a name="scheduledQueryExecutionRoleArnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArnInput"></a>

```java
public java.lang.String getScheduledQueryExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `scheduledQueryNameInput`<sup>Optional</sup> <a name="scheduledQueryNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryNameInput"></a>

```java
public java.lang.String getScheduledQueryNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>>

---

##### `targetConfigurationInput`<sup>Optional</sup> <a name="targetConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.targetConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfiguration getTargetConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `scheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="scheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryExecutionRoleArn"></a>

```java
public java.lang.String getScheduledQueryExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `scheduledQueryName`<sup>Required</sup> <a name="scheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.scheduledQueryName"></a>

```java
public java.lang.String getScheduledQueryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamScheduledQueryConfig <a name="TimestreamScheduledQueryConfig" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryConfig;

TimestreamScheduledQueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .errorReportConfiguration(TimestreamScheduledQueryErrorReportConfiguration)
    .notificationConfiguration(TimestreamScheduledQueryNotificationConfiguration)
    .queryString(java.lang.String)
    .scheduleConfiguration(TimestreamScheduledQueryScheduleConfiguration)
    .scheduledQueryExecutionRoleArn(java.lang.String)
//  .clientToken(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .scheduledQueryName(java.lang.String)
//  .tags(IResolvable|java.util.List<TimestreamScheduledQueryTags>)
//  .targetConfiguration(TimestreamScheduledQueryTargetConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.errorReportConfiguration">errorReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | Notification configuration for the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.queryString">queryString</a></code> | <code>java.lang.String</code> | The query string to run. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | Configuration for when the scheduled query is executed. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryExecutionRoleArn">scheduledQueryExecutionRoleArn</a></code> | <code>java.lang.String</code> | The ARN for the IAM role that Timestream will assume when running the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon KMS key used to encrypt the scheduled query resource, at-rest. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryName">scheduledQueryName</a></code> | <code>java.lang.String</code> | The name of the scheduled query. Scheduled query names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>></code> | A list of key-value pairs to label the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | Configuration of target store where scheduled query results are written to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `errorReportConfiguration`<sup>Required</sup> <a name="errorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.errorReportConfiguration"></a>

```java
public TimestreamScheduledQueryErrorReportConfiguration getErrorReportConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#error_report_configuration TimestreamScheduledQuery#error_report_configuration}

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.notificationConfiguration"></a>

```java
public TimestreamScheduledQueryNotificationConfiguration getNotificationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

Notification configuration for the scheduled query.

A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#notification_configuration TimestreamScheduledQuery#notification_configuration}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

The query string to run.

Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduleConfiguration"></a>

```java
public TimestreamScheduledQueryScheduleConfiguration getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

Configuration for when the scheduled query is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#schedule_configuration TimestreamScheduledQuery#schedule_configuration}

---

##### `scheduledQueryExecutionRoleArn`<sup>Required</sup> <a name="scheduledQueryExecutionRoleArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryExecutionRoleArn"></a>

```java
public java.lang.String getScheduledQueryExecutionRoleArn();
```

- *Type:* java.lang.String

The ARN for the IAM role that Timestream will assume when running the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#scheduled_query_execution_role_arn TimestreamScheduledQuery#scheduled_query_execution_role_arn}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result.

Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#client_token TimestreamScheduledQuery#client_token}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The Amazon KMS key used to encrypt the scheduled query resource, at-rest.

If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#kms_key_id TimestreamScheduledQuery#kms_key_id}

---

##### `scheduledQueryName`<sup>Optional</sup> <a name="scheduledQueryName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.scheduledQueryName"></a>

```java
public java.lang.String getScheduledQueryName();
```

- *Type:* java.lang.String

The name of the scheduled query. Scheduled query names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#scheduled_query_name TimestreamScheduledQuery#scheduled_query_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>>

A list of key-value pairs to label the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#tags TimestreamScheduledQuery#tags}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryConfig.property.targetConfiguration"></a>

```java
public TimestreamScheduledQueryTargetConfiguration getTargetConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

Configuration of target store where scheduled query results are written to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#target_configuration TimestreamScheduledQuery#target_configuration}

---

### TimestreamScheduledQueryErrorReportConfiguration <a name="TimestreamScheduledQueryErrorReportConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryErrorReportConfiguration;

TimestreamScheduledQueryErrorReportConfiguration.builder()
    .s3Configuration(TimestreamScheduledQueryErrorReportConfigurationS3Configuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a></code> | Details on S3 location for error reports that result from running a query. |

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration.property.s3Configuration"></a>

```java
public TimestreamScheduledQueryErrorReportConfigurationS3Configuration getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

Details on S3 location for error reports that result from running a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#s3_configuration TimestreamScheduledQuery#s3_configuration}

---

### TimestreamScheduledQueryErrorReportConfigurationS3Configuration <a name="TimestreamScheduledQueryErrorReportConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryErrorReportConfigurationS3Configuration;

TimestreamScheduledQueryErrorReportConfigurationS3Configuration.builder()
    .bucketName(java.lang.String)
//  .encryptionOption(java.lang.String)
//  .objectKeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the S3 bucket under which error reports will be created. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | Encryption at rest options for the error reports. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>java.lang.String</code> | Prefix for error report keys. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Name of the S3 bucket under which error reports will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#bucket_name TimestreamScheduledQuery#bucket_name}

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

Encryption at rest options for the error reports.

If no encryption option is specified, Timestream will choose SSE_S3 as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#encryption_option TimestreamScheduledQuery#encryption_option}

---

##### `objectKeyPrefix`<sup>Optional</sup> <a name="objectKeyPrefix" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration.property.objectKeyPrefix"></a>

```java
public java.lang.String getObjectKeyPrefix();
```

- *Type:* java.lang.String

Prefix for error report keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#object_key_prefix TimestreamScheduledQuery#object_key_prefix}

---

### TimestreamScheduledQueryNotificationConfiguration <a name="TimestreamScheduledQueryNotificationConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryNotificationConfiguration;

TimestreamScheduledQueryNotificationConfiguration.builder()
    .snsConfiguration(TimestreamScheduledQueryNotificationConfigurationSnsConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a></code> | SNS configuration for notification upon scheduled query execution. |

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration.property.snsConfiguration"></a>

```java
public TimestreamScheduledQueryNotificationConfigurationSnsConfiguration getSnsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

SNS configuration for notification upon scheduled query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#sns_configuration TimestreamScheduledQuery#sns_configuration}

---

### TimestreamScheduledQueryNotificationConfigurationSnsConfiguration <a name="TimestreamScheduledQueryNotificationConfigurationSnsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration;

TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.builder()
    .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | SNS topic ARN that the scheduled query status notifications will be sent to. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

SNS topic ARN that the scheduled query status notifications will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#topic_arn TimestreamScheduledQuery#topic_arn}

---

### TimestreamScheduledQueryScheduleConfiguration <a name="TimestreamScheduledQueryScheduleConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryScheduleConfiguration;

TimestreamScheduledQueryScheduleConfiguration.builder()
    .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | An expression that denotes when to trigger the scheduled query run. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

An expression that denotes when to trigger the scheduled query run.

This can be a cron expression or a rate expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#schedule_expression TimestreamScheduledQuery#schedule_expression}

---

### TimestreamScheduledQueryTags <a name="TimestreamScheduledQueryTags" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTags;

TimestreamScheduledQueryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#key TimestreamScheduledQuery#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#value TimestreamScheduledQuery#value}

---

### TimestreamScheduledQueryTargetConfiguration <a name="TimestreamScheduledQueryTargetConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfiguration;

TimestreamScheduledQueryTargetConfiguration.builder()
//  .timestreamConfiguration(TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration.property.timestreamConfiguration">timestreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a></code> | Configuration needed to write data into the Timestream database and table. |

---

##### `timestreamConfiguration`<sup>Optional</sup> <a name="timestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration.property.timestreamConfiguration"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration getTimestreamConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

Configuration needed to write data into the Timestream database and table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#timestream_configuration TimestreamScheduledQuery#timestream_configuration}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration;

TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.builder()
//  .databaseName(java.lang.String)
//  .dimensionMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings>)
//  .measureNameColumn(java.lang.String)
//  .mixedMeasureMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings>)
//  .multiMeasureMappings(TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings)
//  .tableName(java.lang.String)
//  .timeColumn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Name of Timestream database to which the query result will be written. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.dimensionMappings">dimensionMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>></code> | This is to allow mapping column(s) from the query result to the dimension in the destination table. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.measureNameColumn">measureNameColumn</a></code> | <code>java.lang.String</code> | Name of the measure name column from the query result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.mixedMeasureMappings">mixedMeasureMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>></code> | Specifies how to map measures to multi-measure records. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.multiMeasureMappings">multiMeasureMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a></code> | Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Name of Timestream table that the query result will be written to. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.timeColumn">timeColumn</a></code> | <code>java.lang.String</code> | Column from query result that should be used as the time column in destination table. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Name of Timestream database to which the query result will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#database_name TimestreamScheduledQuery#database_name}

---

##### `dimensionMappings`<sup>Optional</sup> <a name="dimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.dimensionMappings"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings> getDimensionMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>>

This is to allow mapping column(s) from the query result to the dimension in the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#dimension_mappings TimestreamScheduledQuery#dimension_mappings}

---

##### `measureNameColumn`<sup>Optional</sup> <a name="measureNameColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.measureNameColumn"></a>

```java
public java.lang.String getMeasureNameColumn();
```

- *Type:* java.lang.String

Name of the measure name column from the query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#measure_name_column TimestreamScheduledQuery#measure_name_column}

---

##### `mixedMeasureMappings`<sup>Optional</sup> <a name="mixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.mixedMeasureMappings"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings> getMixedMeasureMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>>

Specifies how to map measures to multi-measure records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#mixed_measure_mappings TimestreamScheduledQuery#mixed_measure_mappings}

---

##### `multiMeasureMappings`<sup>Optional</sup> <a name="multiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.multiMeasureMappings"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings getMultiMeasureMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided.

MultiMeasureMappings can be used to ingest data as multi measures in the derived table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#multi_measure_mappings TimestreamScheduledQuery#multi_measure_mappings}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Name of Timestream table that the query result will be written to.

The table should be within the same database that is provided in Timestream configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#table_name TimestreamScheduledQuery#table_name}

---

##### `timeColumn`<sup>Optional</sup> <a name="timeColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration.property.timeColumn"></a>

```java
public java.lang.String getTimeColumn();
```

- *Type:* java.lang.String

Column from query result that should be used as the time column in destination table.

Column type for this should be TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#time_column TimestreamScheduledQuery#time_column}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings;

TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.builder()
//  .dimensionValueType(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.dimensionValueType">dimensionValueType</a></code> | <code>java.lang.String</code> | Type for the dimension. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.name">name</a></code> | <code>java.lang.String</code> | Column name from query result. |

---

##### `dimensionValueType`<sup>Optional</sup> <a name="dimensionValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.dimensionValueType"></a>

```java
public java.lang.String getDimensionValueType();
```

- *Type:* java.lang.String

Type for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#dimension_value_type TimestreamScheduledQuery#dimension_value_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Column name from query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#name TimestreamScheduledQuery#name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings;

TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.builder()
//  .measureName(java.lang.String)
//  .measureValueType(java.lang.String)
//  .multiMeasureAttributeMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings>)
//  .sourceColumn(java.lang.String)
//  .targetMeasureName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureName">measureName</a></code> | <code>java.lang.String</code> | Refers to the value of the measure name in a result row. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureValueType">measureValueType</a></code> | <code>java.lang.String</code> | Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>></code> | Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.sourceColumn">sourceColumn</a></code> | <code>java.lang.String</code> | This field refers to the source column from which the measure value is to be read for result materialization. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.targetMeasureName">targetMeasureName</a></code> | <code>java.lang.String</code> | Target measure name to be used. |

---

##### `measureName`<sup>Optional</sup> <a name="measureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureName"></a>

```java
public java.lang.String getMeasureName();
```

- *Type:* java.lang.String

Refers to the value of the measure name in a result row.

This field is required if MeasureNameColumn is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#measure_name TimestreamScheduledQuery#measure_name}

---

##### `measureValueType`<sup>Optional</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.measureValueType"></a>

```java
public java.lang.String getMeasureValueType();
```

- *Type:* java.lang.String

Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}

---

##### `multiMeasureAttributeMappings`<sup>Optional</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.multiMeasureAttributeMappings"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings> getMultiMeasureAttributeMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>>

Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#multi_measure_attribute_mappings TimestreamScheduledQuery#multi_measure_attribute_mappings}

---

##### `sourceColumn`<sup>Optional</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.sourceColumn"></a>

```java
public java.lang.String getSourceColumn();
```

- *Type:* java.lang.String

This field refers to the source column from which the measure value is to be read for result materialization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}

---

##### `targetMeasureName`<sup>Optional</sup> <a name="targetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings.property.targetMeasureName"></a>

```java
public java.lang.String getTargetMeasureName();
```

- *Type:* java.lang.String

Target measure name to be used.

If not provided, the target measure name by default would be MeasureName if provided, or SourceColumn otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#target_measure_name TimestreamScheduledQuery#target_measure_name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings;

TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.builder()
//  .measureValueType(java.lang.String)
//  .sourceColumn(java.lang.String)
//  .targetMultiMeasureAttributeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType">measureValueType</a></code> | <code>java.lang.String</code> | Value type of the measure value column to be read from the query result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn">sourceColumn</a></code> | <code>java.lang.String</code> | Source measure value column in the query result where the attribute value is to be read. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>java.lang.String</code> | Custom name to be used for attribute name in derived table. |

---

##### `measureValueType`<sup>Optional</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType"></a>

```java
public java.lang.String getMeasureValueType();
```

- *Type:* java.lang.String

Value type of the measure value column to be read from the query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}

---

##### `sourceColumn`<sup>Optional</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn"></a>

```java
public java.lang.String getSourceColumn();
```

- *Type:* java.lang.String

Source measure value column in the query result where the attribute value is to be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}

---

##### `targetMultiMeasureAttributeName`<sup>Optional</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName"></a>

```java
public java.lang.String getTargetMultiMeasureAttributeName();
```

- *Type:* java.lang.String

Custom name to be used for attribute name in derived table.

If not provided, source column name would be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#target_multi_measure_attribute_name TimestreamScheduledQuery#target_multi_measure_attribute_name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings;

TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.builder()
//  .multiMeasureAttributeMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings>)
//  .targetMultiMeasureName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>></code> | Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.targetMultiMeasureName">targetMultiMeasureName</a></code> | <code>java.lang.String</code> | Name of the target multi-measure in the derived table. |

---

##### `multiMeasureAttributeMappings`<sup>Optional</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.multiMeasureAttributeMappings"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings> getMultiMeasureAttributeMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>>

Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#multi_measure_attribute_mappings TimestreamScheduledQuery#multi_measure_attribute_mappings}

---

##### `targetMultiMeasureName`<sup>Optional</sup> <a name="targetMultiMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings.property.targetMultiMeasureName"></a>

```java
public java.lang.String getTargetMultiMeasureName();
```

- *Type:* java.lang.String

Name of the target multi-measure in the derived table.

Required if MeasureNameColumn is not provided. If MeasureNameColumn is provided then the value from that column will be used as the multi-measure name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#target_multi_measure_name TimestreamScheduledQuery#target_multi_measure_name}

---

### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings;

TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.builder()
//  .measureValueType(java.lang.String)
//  .sourceColumn(java.lang.String)
//  .targetMultiMeasureAttributeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType">measureValueType</a></code> | <code>java.lang.String</code> | Value type of the measure value column to be read from the query result. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn">sourceColumn</a></code> | <code>java.lang.String</code> | Source measure value column in the query result where the attribute value is to be read. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>java.lang.String</code> | Custom name to be used for attribute name in derived table. |

---

##### `measureValueType`<sup>Optional</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.measureValueType"></a>

```java
public java.lang.String getMeasureValueType();
```

- *Type:* java.lang.String

Value type of the measure value column to be read from the query result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}

---

##### `sourceColumn`<sup>Optional</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.sourceColumn"></a>

```java
public java.lang.String getSourceColumn();
```

- *Type:* java.lang.String

Source measure value column in the query result where the attribute value is to be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}

---

##### `targetMultiMeasureAttributeName`<sup>Optional</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings.property.targetMultiMeasureAttributeName"></a>

```java
public java.lang.String getTargetMultiMeasureAttributeName();
```

- *Type:* java.lang.String

Custom name to be used for attribute name in derived table.

If not provided, source column name would be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/timestream_scheduled_query#target_multi_measure_attribute_name TimestreamScheduledQuery#target_multi_measure_attribute_name}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamScheduledQueryErrorReportConfigurationOutputReference <a name="TimestreamScheduledQueryErrorReportConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryErrorReportConfigurationOutputReference;

new TimestreamScheduledQueryErrorReportConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.putS3Configuration"></a>

```java
public void putS3Configuration(TimestreamScheduledQueryErrorReportConfigurationS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3Configuration"></a>

```java
public TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference">TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.s3ConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryErrorReportConfigurationS3Configuration getS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryErrorReportConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfiguration">TimestreamScheduledQueryErrorReportConfiguration</a>

---


### TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference <a name="TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference;

new TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetObjectKeyPrefix">resetObjectKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetEncryptionOption"></a>

```java
public void resetEncryptionOption()
```

##### `resetObjectKeyPrefix` <a name="resetObjectKeyPrefix" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.resetObjectKeyPrefix"></a>

```java
public void resetObjectKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefixInput">objectKeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOptionInput"></a>

```java
public java.lang.String getEncryptionOptionInput();
```

- *Type:* java.lang.String

---

##### `objectKeyPrefixInput`<sup>Optional</sup> <a name="objectKeyPrefixInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefixInput"></a>

```java
public java.lang.String getObjectKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

---

##### `objectKeyPrefix`<sup>Required</sup> <a name="objectKeyPrefix" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```java
public java.lang.String getObjectKeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryErrorReportConfigurationS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryErrorReportConfigurationS3Configuration">TimestreamScheduledQueryErrorReportConfigurationS3Configuration</a>

---


### TimestreamScheduledQueryNotificationConfigurationOutputReference <a name="TimestreamScheduledQueryNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryNotificationConfigurationOutputReference;

new TimestreamScheduledQueryNotificationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.putSnsConfiguration">putSnsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSnsConfiguration` <a name="putSnsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.putSnsConfiguration"></a>

```java
public void putSnsConfiguration(TimestreamScheduledQueryNotificationConfigurationSnsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.putSnsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfigurationInput">snsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfiguration"></a>

```java
public TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference getSnsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference">TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference</a>

---

##### `snsConfigurationInput`<sup>Optional</sup> <a name="snsConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.snsConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryNotificationConfigurationSnsConfiguration getSnsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryNotificationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfiguration">TimestreamScheduledQueryNotificationConfiguration</a>

---


### TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference <a name="TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference;

new TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryNotificationConfigurationSnsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryNotificationConfigurationSnsConfiguration">TimestreamScheduledQueryNotificationConfigurationSnsConfiguration</a>

---


### TimestreamScheduledQueryScheduleConfigurationOutputReference <a name="TimestreamScheduledQueryScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryScheduleConfigurationOutputReference;

new TimestreamScheduledQueryScheduleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryScheduleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryScheduleConfiguration">TimestreamScheduledQueryScheduleConfiguration</a>

---


### TimestreamScheduledQueryTagsList <a name="TimestreamScheduledQueryTagsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTagsList;

new TimestreamScheduledQueryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.get"></a>

```java
public TimestreamScheduledQueryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>>

---


### TimestreamScheduledQueryTagsOutputReference <a name="TimestreamScheduledQueryTagsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTagsOutputReference;

new TimestreamScheduledQueryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTags">TimestreamScheduledQueryTags</a>

---


### TimestreamScheduledQueryTargetConfigurationOutputReference <a name="TimestreamScheduledQueryTargetConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationOutputReference;

new TimestreamScheduledQueryTargetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.putTimestreamConfiguration">putTimestreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resetTimestreamConfiguration">resetTimestreamConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimestreamConfiguration` <a name="putTimestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.putTimestreamConfiguration"></a>

```java
public void putTimestreamConfiguration(TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.putTimestreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

---

##### `resetTimestreamConfiguration` <a name="resetTimestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.resetTimestreamConfiguration"></a>

```java
public void resetTimestreamConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfiguration">timestreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfigurationInput">timestreamConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestreamConfiguration`<sup>Required</sup> <a name="timestreamConfiguration" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfiguration"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference getTimestreamConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference</a>

---

##### `timestreamConfigurationInput`<sup>Optional</sup> <a name="timestreamConfigurationInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.timestreamConfigurationInput"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration getTimestreamConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfiguration">TimestreamScheduledQueryTargetConfiguration</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.get"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetDimensionValueType">resetDimensionValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionValueType` <a name="resetDimensionValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetDimensionValueType"></a>

```java
public void resetDimensionValueType()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueTypeInput">dimensionValueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueType">dimensionValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionValueTypeInput`<sup>Optional</sup> <a name="dimensionValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueTypeInput"></a>

```java
public java.lang.String getDimensionValueTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dimensionValueType`<sup>Required</sup> <a name="dimensionValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.dimensionValueType"></a>

```java
public java.lang.String getDimensionValueType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.get"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.get"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType">resetMeasureValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn">resetSourceColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName">resetTargetMultiMeasureAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMeasureValueType` <a name="resetMeasureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType"></a>

```java
public void resetMeasureValueType()
```

##### `resetSourceColumn` <a name="resetSourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn"></a>

```java
public void resetSourceColumn()
```

##### `resetTargetMultiMeasureAttributeName` <a name="resetTargetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName"></a>

```java
public void resetTargetMultiMeasureAttributeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput">measureValueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput">sourceColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput">targetMultiMeasureAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType">measureValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn">sourceColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `measureValueTypeInput`<sup>Optional</sup> <a name="measureValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput"></a>

```java
public java.lang.String getMeasureValueTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceColumnInput`<sup>Optional</sup> <a name="sourceColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput"></a>

```java
public java.lang.String getSourceColumnInput();
```

- *Type:* java.lang.String

---

##### `targetMultiMeasureAttributeNameInput`<sup>Optional</sup> <a name="targetMultiMeasureAttributeNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput"></a>

```java
public java.lang.String getTargetMultiMeasureAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `measureValueType`<sup>Required</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType"></a>

```java
public java.lang.String getMeasureValueType();
```

- *Type:* java.lang.String

---

##### `sourceColumn`<sup>Required</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn"></a>

```java
public java.lang.String getSourceColumn();
```

- *Type:* java.lang.String

---

##### `targetMultiMeasureAttributeName`<sup>Required</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName"></a>

```java
public java.lang.String getTargetMultiMeasureAttributeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.putMultiMeasureAttributeMappings">putMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureName">resetMeasureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureValueType">resetMeasureValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings">resetMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetSourceColumn">resetSourceColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetTargetMeasureName">resetTargetMeasureName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiMeasureAttributeMappings` <a name="putMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.putMultiMeasureAttributeMappings"></a>

```java
public void putMultiMeasureAttributeMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.putMultiMeasureAttributeMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>>

---

##### `resetMeasureName` <a name="resetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureName"></a>

```java
public void resetMeasureName()
```

##### `resetMeasureValueType` <a name="resetMeasureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMeasureValueType"></a>

```java
public void resetMeasureValueType()
```

##### `resetMultiMeasureAttributeMappings` <a name="resetMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings"></a>

```java
public void resetMultiMeasureAttributeMappings()
```

##### `resetSourceColumn` <a name="resetSourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetSourceColumn"></a>

```java
public void resetSourceColumn()
```

##### `resetTargetMeasureName` <a name="resetTargetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.resetTargetMeasureName"></a>

```java
public void resetTargetMeasureName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureNameInput">measureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueTypeInput">measureValueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput">multiMeasureAttributeMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumnInput">sourceColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureNameInput">targetMeasureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureName">measureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueType">measureValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumn">sourceColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureName">targetMeasureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiMeasureAttributeMappings`<sup>Required</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappings"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList getMultiMeasureAttributeMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList</a>

---

##### `measureNameInput`<sup>Optional</sup> <a name="measureNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureNameInput"></a>

```java
public java.lang.String getMeasureNameInput();
```

- *Type:* java.lang.String

---

##### `measureValueTypeInput`<sup>Optional</sup> <a name="measureValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueTypeInput"></a>

```java
public java.lang.String getMeasureValueTypeInput();
```

- *Type:* java.lang.String

---

##### `multiMeasureAttributeMappingsInput`<sup>Optional</sup> <a name="multiMeasureAttributeMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings> getMultiMeasureAttributeMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings</a>>

---

##### `sourceColumnInput`<sup>Optional</sup> <a name="sourceColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumnInput"></a>

```java
public java.lang.String getSourceColumnInput();
```

- *Type:* java.lang.String

---

##### `targetMeasureNameInput`<sup>Optional</sup> <a name="targetMeasureNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureNameInput"></a>

```java
public java.lang.String getTargetMeasureNameInput();
```

- *Type:* java.lang.String

---

##### `measureName`<sup>Required</sup> <a name="measureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureName"></a>

```java
public java.lang.String getMeasureName();
```

- *Type:* java.lang.String

---

##### `measureValueType`<sup>Required</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.measureValueType"></a>

```java
public java.lang.String getMeasureValueType();
```

- *Type:* java.lang.String

---

##### `sourceColumn`<sup>Required</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.sourceColumn"></a>

```java
public java.lang.String getSourceColumn();
```

- *Type:* java.lang.String

---

##### `targetMeasureName`<sup>Required</sup> <a name="targetMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.targetMeasureName"></a>

```java
public java.lang.String getTargetMeasureName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.get"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType">resetMeasureValueType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn">resetSourceColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName">resetTargetMultiMeasureAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMeasureValueType` <a name="resetMeasureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetMeasureValueType"></a>

```java
public void resetMeasureValueType()
```

##### `resetSourceColumn` <a name="resetSourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetSourceColumn"></a>

```java
public void resetSourceColumn()
```

##### `resetTargetMultiMeasureAttributeName` <a name="resetTargetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.resetTargetMultiMeasureAttributeName"></a>

```java
public void resetTargetMultiMeasureAttributeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput">measureValueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput">sourceColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput">targetMultiMeasureAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType">measureValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn">sourceColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName">targetMultiMeasureAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `measureValueTypeInput`<sup>Optional</sup> <a name="measureValueTypeInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueTypeInput"></a>

```java
public java.lang.String getMeasureValueTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceColumnInput`<sup>Optional</sup> <a name="sourceColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumnInput"></a>

```java
public java.lang.String getSourceColumnInput();
```

- *Type:* java.lang.String

---

##### `targetMultiMeasureAttributeNameInput`<sup>Optional</sup> <a name="targetMultiMeasureAttributeNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeNameInput"></a>

```java
public java.lang.String getTargetMultiMeasureAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `measureValueType`<sup>Required</sup> <a name="measureValueType" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.measureValueType"></a>

```java
public java.lang.String getMeasureValueType();
```

- *Type:* java.lang.String

---

##### `sourceColumn`<sup>Required</sup> <a name="sourceColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.sourceColumn"></a>

```java
public java.lang.String getSourceColumn();
```

- *Type:* java.lang.String

---

##### `targetMultiMeasureAttributeName`<sup>Required</sup> <a name="targetMultiMeasureAttributeName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.targetMultiMeasureAttributeName"></a>

```java
public java.lang.String getTargetMultiMeasureAttributeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.putMultiMeasureAttributeMappings">putMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings">resetMultiMeasureAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetTargetMultiMeasureName">resetTargetMultiMeasureName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiMeasureAttributeMappings` <a name="putMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.putMultiMeasureAttributeMappings"></a>

```java
public void putMultiMeasureAttributeMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.putMultiMeasureAttributeMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>>

---

##### `resetMultiMeasureAttributeMappings` <a name="resetMultiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetMultiMeasureAttributeMappings"></a>

```java
public void resetMultiMeasureAttributeMappings()
```

##### `resetTargetMultiMeasureName` <a name="resetTargetMultiMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.resetTargetMultiMeasureName"></a>

```java
public void resetTargetMultiMeasureName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappings">multiMeasureAttributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput">multiMeasureAttributeMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureNameInput">targetMultiMeasureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureName">targetMultiMeasureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiMeasureAttributeMappings`<sup>Required</sup> <a name="multiMeasureAttributeMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappings"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList getMultiMeasureAttributeMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList</a>

---

##### `multiMeasureAttributeMappingsInput`<sup>Optional</sup> <a name="multiMeasureAttributeMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.multiMeasureAttributeMappingsInput"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings> getMultiMeasureAttributeMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings</a>>

---

##### `targetMultiMeasureNameInput`<sup>Optional</sup> <a name="targetMultiMeasureNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureNameInput"></a>

```java
public java.lang.String getTargetMultiMeasureNameInput();
```

- *Type:* java.lang.String

---

##### `targetMultiMeasureName`<sup>Required</sup> <a name="targetMultiMeasureName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.targetMultiMeasureName"></a>

```java
public java.lang.String getTargetMultiMeasureName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

---


### TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference <a name="TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.timestream_scheduled_query.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference;

new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putDimensionMappings">putDimensionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMixedMeasureMappings">putMixedMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMultiMeasureMappings">putMultiMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDimensionMappings">resetDimensionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMeasureNameColumn">resetMeasureNameColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMixedMeasureMappings">resetMixedMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMultiMeasureMappings">resetMultiMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTimeColumn">resetTimeColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensionMappings` <a name="putDimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putDimensionMappings"></a>

```java
public void putDimensionMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putDimensionMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>>

---

##### `putMixedMeasureMappings` <a name="putMixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMixedMeasureMappings"></a>

```java
public void putMixedMeasureMappings(IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMixedMeasureMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>>

---

##### `putMultiMeasureMappings` <a name="putMultiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMultiMeasureMappings"></a>

```java
public void putMultiMeasureMappings(TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.putMultiMeasureMappings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

---

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDimensionMappings` <a name="resetDimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetDimensionMappings"></a>

```java
public void resetDimensionMappings()
```

##### `resetMeasureNameColumn` <a name="resetMeasureNameColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMeasureNameColumn"></a>

```java
public void resetMeasureNameColumn()
```

##### `resetMixedMeasureMappings` <a name="resetMixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMixedMeasureMappings"></a>

```java
public void resetMixedMeasureMappings()
```

##### `resetMultiMeasureMappings` <a name="resetMultiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetMultiMeasureMappings"></a>

```java
public void resetMultiMeasureMappings()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTimeColumn` <a name="resetTimeColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.resetTimeColumn"></a>

```java
public void resetTimeColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappings">dimensionMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappings">mixedMeasureMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappings">multiMeasureMappings</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappingsInput">dimensionMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumnInput">measureNameColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappingsInput">mixedMeasureMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappingsInput">multiMeasureMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumnInput">timeColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumn">measureNameColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumn">timeColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionMappings`<sup>Required</sup> <a name="dimensionMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappings"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList getDimensionMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList</a>

---

##### `mixedMeasureMappings`<sup>Required</sup> <a name="mixedMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappings"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList getMixedMeasureMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList</a>

---

##### `multiMeasureMappings`<sup>Required</sup> <a name="multiMeasureMappings" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappings"></a>

```java
public TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference getMultiMeasureMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dimensionMappingsInput`<sup>Optional</sup> <a name="dimensionMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.dimensionMappingsInput"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings> getDimensionMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings</a>>

---

##### `measureNameColumnInput`<sup>Optional</sup> <a name="measureNameColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumnInput"></a>

```java
public java.lang.String getMeasureNameColumnInput();
```

- *Type:* java.lang.String

---

##### `mixedMeasureMappingsInput`<sup>Optional</sup> <a name="mixedMeasureMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.mixedMeasureMappingsInput"></a>

```java
public IResolvable|java.util.List<TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings> getMixedMeasureMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings</a>>

---

##### `multiMeasureMappingsInput`<sup>Optional</sup> <a name="multiMeasureMappingsInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.multiMeasureMappingsInput"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings getMultiMeasureMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings">TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeColumnInput`<sup>Optional</sup> <a name="timeColumnInput" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumnInput"></a>

```java
public java.lang.String getTimeColumnInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `measureNameColumn`<sup>Required</sup> <a name="measureNameColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.measureNameColumn"></a>

```java
public java.lang.String getMeasureNameColumn();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `timeColumn`<sup>Required</sup> <a name="timeColumn" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.timeColumn"></a>

```java
public java.lang.String getTimeColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.timestreamScheduledQuery.TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration">TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration</a>

---



