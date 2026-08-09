# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktn/provider-awscc.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktn/provider-awscc.glueJob.GlueJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job awscc_glue_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJob;

GlueJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .command(GlueJobCommand)
    .role(java.lang.String)
//  .allocatedCapacity(java.lang.Number)
//  .connections(GlueJobConnections)
//  .defaultArguments(java.lang.String)
//  .description(java.lang.String)
//  .executionClass(java.lang.String)
//  .executionProperty(GlueJobExecutionProperty)
//  .glueVersion(java.lang.String)
//  .jobMode(java.lang.String)
//  .jobRunQueuingEnabled(java.lang.Boolean|IResolvable)
//  .logUri(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .name(java.lang.String)
//  .nonOverridableArguments(java.lang.String)
//  .notificationProperty(GlueJobNotificationProperty)
//  .numberOfWorkers(java.lang.Number)
//  .securityConfiguration(java.lang.String)
//  .tags(java.lang.String)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.allocatedCapacity">allocatedCapacity</a></code> | <code>java.lang.Number</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.defaultArguments">defaultArguments</a></code> | <code>java.lang.String</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionClass">executionClass</a></code> | <code>java.lang.String</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionProperty">executionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobMode">jobMode</a></code> | <code>java.lang.String</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobRunQueuingEnabled">jobRunQueuingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.logUri">logUri</a></code> | <code>java.lang.String</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments">nonOverridableArguments</a></code> | <code>java.lang.String</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.workerType">workerType</a></code> | <code>java.lang.String</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.command"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#command GlueJob#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#role GlueJob#role}

---

##### `allocatedCapacity`<sup>Optional</sup> <a name="allocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.allocatedCapacity"></a>

- *Type:* java.lang.Number

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.defaultArguments"></a>

- *Type:* java.lang.String

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#description GlueJob#description}

---

##### `executionClass`<sup>Optional</sup> <a name="executionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionClass"></a>

- *Type:* java.lang.String

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `executionProperty`<sup>Optional</sup> <a name="executionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionProperty"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.glueVersion"></a>

- *Type:* java.lang.String

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `jobMode`<sup>Optional</sup> <a name="jobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobMode"></a>

- *Type:* java.lang.String

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `jobRunQueuingEnabled`<sup>Optional</sup> <a name="jobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobRunQueuingEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.logUri"></a>

- *Type:* java.lang.String

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maintenanceWindow"></a>

- *Type:* java.lang.String

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="nonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments"></a>

- *Type:* java.lang.String

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.notificationProperty"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.numberOfWorkers"></a>

- *Type:* java.lang.Number

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.securityConfiguration"></a>

- *Type:* java.lang.String

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.workerType"></a>

- *Type:* java.lang.String

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putCommand">putCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty">putExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty">putNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity">resetAllocatedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetConnections">resetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments">resetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass">resetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty">resetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode">resetJobMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled">resetJobRunQueuingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments">resetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty">resetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueJob.GlueJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueJob.GlueJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommand` <a name="putCommand" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand"></a>

```java
public void putCommand(GlueJobCommand value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `putConnections` <a name="putConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections"></a>

```java
public void putConnections(GlueJobConnections value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `putExecutionProperty` <a name="putExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty"></a>

```java
public void putExecutionProperty(GlueJobExecutionProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `putNotificationProperty` <a name="putNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty"></a>

```java
public void putNotificationProperty(GlueJobNotificationProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `resetAllocatedCapacity` <a name="resetAllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity"></a>

```java
public void resetAllocatedCapacity()
```

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.resetConnections"></a>

```java
public void resetConnections()
```

##### `resetDefaultArguments` <a name="resetDefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments"></a>

```java
public void resetDefaultArguments()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionClass` <a name="resetExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass"></a>

```java
public void resetExecutionClass()
```

##### `resetExecutionProperty` <a name="resetExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty"></a>

```java
public void resetExecutionProperty()
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion"></a>

```java
public void resetGlueVersion()
```

##### `resetJobMode` <a name="resetJobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode"></a>

```java
public void resetJobMode()
```

##### `resetJobRunQueuingEnabled` <a name="resetJobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled"></a>

```java
public void resetJobRunQueuingEnabled()
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri"></a>

```java
public void resetLogUri()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueJob.GlueJob.resetName"></a>

```java
public void resetName()
```

##### `resetNonOverridableArguments` <a name="resetNonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments"></a>

```java
public void resetNonOverridableArguments()
```

##### `resetNotificationProperty` <a name="resetNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty"></a>

```java
public void resetNotificationProperty()
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers"></a>

```java
public void resetNumberOfWorkers()
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration"></a>

```java
public void resetSecurityConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType"></a>

```java
public void resetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJob;

GlueJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJob;

GlueJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJob;

GlueJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJob;

GlueJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty">executionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput">allocatedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput">commandInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput">connectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput">defaultArgumentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput">executionClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput">executionPropertyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput">glueVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput">jobModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput">jobRunQueuingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput">logUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput">nonOverridableArgumentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput">notificationPropertyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity">allocatedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments">defaultArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass">executionClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode">jobMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled">jobRunQueuingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments">nonOverridableArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueJob.GlueJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueJob.GlueJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJob.property.command"></a>

```java
public GlueJobCommandOutputReference getCommand();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connections"></a>

```java
public GlueJobConnectionsOutputReference getConnections();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a>

---

##### `executionProperty`<sup>Required</sup> <a name="executionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty"></a>

```java
public GlueJobExecutionPropertyOutputReference getExecutionProperty();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationProperty`<sup>Required</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty"></a>

```java
public GlueJobNotificationPropertyOutputReference getNotificationProperty();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `allocatedCapacityInput`<sup>Optional</sup> <a name="allocatedCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput"></a>

```java
public java.lang.Number getAllocatedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput"></a>

```java
public IResolvable|GlueJobCommand getCommandInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput"></a>

```java
public IResolvable|GlueJobConnections getConnectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `defaultArgumentsInput`<sup>Optional</sup> <a name="defaultArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```java
public java.lang.String getDefaultArgumentsInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionClassInput`<sup>Optional</sup> <a name="executionClassInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput"></a>

```java
public java.lang.String getExecutionClassInput();
```

- *Type:* java.lang.String

---

##### `executionPropertyInput`<sup>Optional</sup> <a name="executionPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput"></a>

```java
public IResolvable|GlueJobExecutionProperty getExecutionPropertyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput"></a>

```java
public java.lang.String getGlueVersionInput();
```

- *Type:* java.lang.String

---

##### `jobModeInput`<sup>Optional</sup> <a name="jobModeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput"></a>

```java
public java.lang.String getJobModeInput();
```

- *Type:* java.lang.String

---

##### `jobRunQueuingEnabledInput`<sup>Optional</sup> <a name="jobRunQueuingEnabledInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getJobRunQueuingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput"></a>

```java
public java.lang.String getLogUriInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput"></a>

```java
public java.lang.String getMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonOverridableArgumentsInput`<sup>Optional</sup> <a name="nonOverridableArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```java
public java.lang.String getNonOverridableArgumentsInput();
```

- *Type:* java.lang.String

---

##### `notificationPropertyInput`<sup>Optional</sup> <a name="notificationPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput"></a>

```java
public IResolvable|GlueJobNotificationProperty getNotificationPropertyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```java
public java.lang.Number getNumberOfWorkersInput();
```

- *Type:* java.lang.Number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput"></a>

```java
public java.lang.String getSecurityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `allocatedCapacity`<sup>Required</sup> <a name="allocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity"></a>

```java
public java.lang.Number getAllocatedCapacity();
```

- *Type:* java.lang.Number

---

##### `defaultArguments`<sup>Required</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments"></a>

```java
public java.lang.String getDefaultArguments();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionClass`<sup>Required</sup> <a name="executionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass"></a>

```java
public java.lang.String getExecutionClass();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode"></a>

```java
public java.lang.String getJobMode();
```

- *Type:* java.lang.String

---

##### `jobRunQueuingEnabled`<sup>Required</sup> <a name="jobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getJobRunQueuingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonOverridableArguments`<sup>Required</sup> <a name="nonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments"></a>

```java
public java.lang.String getNonOverridableArguments();
```

- *Type:* java.lang.String

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJob.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktn/provider-awscc.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobCommand;

GlueJobCommand.builder()
//  .name(java.lang.String)
//  .pythonVersion(java.lang.String)
//  .runtime(java.lang.String)
//  .scriptLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name">name</a></code> | <code>java.lang.String</code> | The name of the job command. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | The Python version being used to execute a Python shell job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation">scriptLocation</a></code> | <code>java.lang.String</code> | Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the job command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

The Python version being used to execute a Python shell job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#python_version GlueJob#python_version}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#runtime GlueJob#runtime}

---

##### `scriptLocation`<sup>Optional</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation"></a>

```java
public java.lang.String getScriptLocation();
```

- *Type:* java.lang.String

Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#script_location GlueJob#script_location}

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktn/provider-awscc.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobConfig;

GlueJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .command(GlueJobCommand)
    .role(java.lang.String)
//  .allocatedCapacity(java.lang.Number)
//  .connections(GlueJobConnections)
//  .defaultArguments(java.lang.String)
//  .description(java.lang.String)
//  .executionClass(java.lang.String)
//  .executionProperty(GlueJobExecutionProperty)
//  .glueVersion(java.lang.String)
//  .jobMode(java.lang.String)
//  .jobRunQueuingEnabled(java.lang.Boolean|IResolvable)
//  .logUri(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .name(java.lang.String)
//  .nonOverridableArguments(java.lang.String)
//  .notificationProperty(GlueJobNotificationProperty)
//  .numberOfWorkers(java.lang.Number)
//  .securityConfiguration(java.lang.String)
//  .tags(java.lang.String)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role">role</a></code> | <code>java.lang.String</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity">allocatedCapacity</a></code> | <code>java.lang.Number</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments">defaultArguments</a></code> | <code>java.lang.String</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass">executionClass</a></code> | <code>java.lang.String</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty">executionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode">jobMode</a></code> | <code>java.lang.String</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled">jobRunQueuingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri">logUri</a></code> | <code>java.lang.String</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments">nonOverridableArguments</a></code> | <code>java.lang.String</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType">workerType</a></code> | <code>java.lang.String</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command"></a>

```java
public GlueJobCommand getCommand();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#command GlueJob#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#role GlueJob#role}

---

##### `allocatedCapacity`<sup>Optional</sup> <a name="allocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity"></a>

```java
public java.lang.Number getAllocatedCapacity();
```

- *Type:* java.lang.Number

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections"></a>

```java
public GlueJobConnections getConnections();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments"></a>

```java
public java.lang.String getDefaultArguments();
```

- *Type:* java.lang.String

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#description GlueJob#description}

---

##### `executionClass`<sup>Optional</sup> <a name="executionClass" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass"></a>

```java
public java.lang.String getExecutionClass();
```

- *Type:* java.lang.String

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `executionProperty`<sup>Optional</sup> <a name="executionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty"></a>

```java
public GlueJobExecutionProperty getExecutionProperty();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `jobMode`<sup>Optional</sup> <a name="jobMode" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode"></a>

```java
public java.lang.String getJobMode();
```

- *Type:* java.lang.String

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `jobRunQueuingEnabled`<sup>Optional</sup> <a name="jobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getJobRunQueuingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="nonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```java
public java.lang.String getNonOverridableArguments();
```

- *Type:* java.lang.String

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty"></a>

```java
public GlueJobNotificationProperty getNotificationProperty();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

### GlueJobConnections <a name="GlueJobConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobConnections;

GlueJobConnections.builder()
//  .connections(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | A list of connections used by the job. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections"></a>

```java
public java.util.List<java.lang.String> getConnections();
```

- *Type:* java.util.List<java.lang.String>

A list of connections used by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobExecutionProperty;

GlueJobExecutionProperty.builder()
//  .maxConcurrentRuns(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">maxConcurrentRuns</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent runs allowed for the job. |

---

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="maxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```java
public java.lang.Number getMaxConcurrentRuns();
```

- *Type:* java.lang.Number

The maximum number of concurrent runs allowed for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobNotificationProperty;

GlueJobNotificationProperty.builder()
//  .notifyDelayAfter(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>java.lang.Number</code> | It is the number of minutes to wait before sending a job run delay notification after a job run starts. |

---

##### `notifyDelayAfter`<sup>Optional</sup> <a name="notifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```java
public java.lang.Number getNotifyDelayAfter();
```

- *Type:* java.lang.Number

It is the number of minutes to wait before sending a job run delay notification after a job run starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobCommandOutputReference;

new GlueJobCommandOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation">resetScriptLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetScriptLocation` <a name="resetScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation"></a>

```java
public void resetScriptLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">scriptLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `scriptLocationInput`<sup>Optional</sup> <a name="scriptLocationInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```java
public java.lang.String getScriptLocationInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```java
public java.lang.String getScriptLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueJobCommand getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobConnectionsOutputReference <a name="GlueJobConnectionsOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobConnectionsOutputReference;

new GlueJobConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections"></a>

```java
public void resetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput"></a>

```java
public java.util.List<java.lang.String> getConnectionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections"></a>

```java
public java.util.List<java.lang.String> getConnections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueJobConnections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobExecutionPropertyOutputReference;

new GlueJobExecutionPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">resetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentRuns` <a name="resetMaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```java
public void resetMaxConcurrentRuns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">maxConcurrentRunsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">maxConcurrentRuns</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrentRunsInput`<sup>Optional</sup> <a name="maxConcurrentRunsInput" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```java
public java.lang.Number getMaxConcurrentRunsInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentRuns`<sup>Required</sup> <a name="maxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```java
public java.lang.Number getMaxConcurrentRuns();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueJobExecutionProperty getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_job.GlueJobNotificationPropertyOutputReference;

new GlueJobNotificationPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">resetNotifyDelayAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotifyDelayAfter` <a name="resetNotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```java
public void resetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">notifyDelayAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notifyDelayAfterInput`<sup>Optional</sup> <a name="notifyDelayAfterInput" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```java
public java.lang.Number getNotifyDelayAfterInput();
```

- *Type:* java.lang.Number

---

##### `notifyDelayAfter`<sup>Required</sup> <a name="notifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```java
public java.lang.Number getNotifyDelayAfter();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueJobNotificationProperty getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---



