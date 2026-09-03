# `iotJob` Submodule <a name="`iotJob` Submodule" id="@cdktn/provider-awscc.iotJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJob <a name="IotJob" id="@cdktn/provider-awscc.iotJob.IotJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job awscc_iot_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJob;

IotJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .jobId(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .abortConfig(IotJobAbortConfig)
//  .description(java.lang.String)
//  .destinationPackageVersions(java.util.List<java.lang.String>)
//  .document(java.lang.String)
//  .documentParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .documentSource(java.lang.String)
//  .jobExecutionsRetryConfig(IotJobJobExecutionsRetryConfig)
//  .jobExecutionsRolloutConfig(IotJobJobExecutionsRolloutConfig)
//  .jobTemplateArn(java.lang.String)
//  .presignedUrlConfig(IotJobPresignedUrlConfig)
//  .schedulingConfig(IotJobSchedulingConfig)
//  .tags(IResolvable|java.util.List<IotJobTags>)
//  .targetSelection(java.lang.String)
//  .timeoutConfig(IotJobTimeoutConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | A job identifier which must be unique for your AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | A list of things and thing groups to which the job should be sent. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A short text description of the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.document">document</a></code> | <code>java.lang.String</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.documentParameters">documentParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters of an Amazon Web Services managed template that you can specify to create the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.documentSource">documentSource</a></code> | <code>java.lang.String</code> | An S3 link, or S3 object URL, to the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | The configuration that determines how many retries are allowed for each failure type for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobTemplateArn">jobTemplateArn</a></code> | <code>java.lang.String</code> | The ARN of the job template used to create the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>></code> | Metadata which can be used to manage the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

A job identifier which must be unique for your AWS account.

We recommend using a UUID. Alpha-numeric characters, '-' and '_' are valid for use here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_id IotJob#job_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.targets"></a>

- *Type:* java.util.List<java.lang.String>

A list of things and thing groups to which the job should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#targets IotJob#targets}

---

##### `abortConfig`<sup>Optional</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.abortConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#abort_config IotJob#abort_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A short text description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#description IotJob#description}

---

##### `destinationPackageVersions`<sup>Optional</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.destinationPackageVersions"></a>

- *Type:* java.util.List<java.lang.String>

The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#destination_package_versions IotJob#destination_package_versions}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.document"></a>

- *Type:* java.lang.String

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#document IotJob#document}

---

##### `documentParameters`<sup>Optional</sup> <a name="documentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.documentParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters of an Amazon Web Services managed template that you can specify to create the job document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#document_parameters IotJob#document_parameters}

---

##### `documentSource`<sup>Optional</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.documentSource"></a>

- *Type:* java.lang.String

An S3 link, or S3 object URL, to the job document.

The link is an Amazon S3 object URL and is required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#document_source IotJob#document_source}

---

##### `jobExecutionsRetryConfig`<sup>Optional</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobExecutionsRetryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

The configuration that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_executions_retry_config IotJob#job_executions_retry_config}

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobExecutionsRolloutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_executions_rollout_config IotJob#job_executions_rollout_config}

---

##### `jobTemplateArn`<sup>Optional</sup> <a name="jobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.jobTemplateArn"></a>

- *Type:* java.lang.String

The ARN of the job template used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_template_arn IotJob#job_template_arn}

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.presignedUrlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#presigned_url_config IotJob#presigned_url_config}

---

##### `schedulingConfig`<sup>Optional</sup> <a name="schedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.schedulingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#scheduling_config IotJob#scheduling_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>>

Metadata which can be used to manage the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#tags IotJob#tags}

---

##### `targetSelection`<sup>Optional</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.targetSelection"></a>

- *Type:* java.lang.String

Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#target_selection IotJob#target_selection}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#timeout_config IotJob#timeout_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig">putAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig">putJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig">putJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig">putPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig">putSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetAbortConfig">resetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDestinationPackageVersions">resetDestinationPackageVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocumentParameters">resetDocumentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocumentSource">resetDocumentSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRetryConfig">resetJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRolloutConfig">resetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobTemplateArn">resetJobTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetPresignedUrlConfig">resetPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetSchedulingConfig">resetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTargetSelection">resetTargetSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotJob.IotJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotJob.IotJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotJob.IotJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotJob.IotJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotJob.IotJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotJob.IotJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotJob.IotJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotJob.IotJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbortConfig` <a name="putAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig"></a>

```java
public void putAbortConfig(IotJobAbortConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---

##### `putJobExecutionsRetryConfig` <a name="putJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig"></a>

```java
public void putJobExecutionsRetryConfig(IotJobJobExecutionsRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---

##### `putJobExecutionsRolloutConfig` <a name="putJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig"></a>

```java
public void putJobExecutionsRolloutConfig(IotJobJobExecutionsRolloutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---

##### `putPresignedUrlConfig` <a name="putPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig"></a>

```java
public void putPresignedUrlConfig(IotJobPresignedUrlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---

##### `putSchedulingConfig` <a name="putSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig"></a>

```java
public void putSchedulingConfig(IotJobSchedulingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotJob.IotJob.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotJobTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>>

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig"></a>

```java
public void putTimeoutConfig(IotJobTimeoutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---

##### `resetAbortConfig` <a name="resetAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetAbortConfig"></a>

```java
public void resetAbortConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotJob.IotJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationPackageVersions` <a name="resetDestinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.resetDestinationPackageVersions"></a>

```java
public void resetDestinationPackageVersions()
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocument"></a>

```java
public void resetDocument()
```

##### `resetDocumentParameters` <a name="resetDocumentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocumentParameters"></a>

```java
public void resetDocumentParameters()
```

##### `resetDocumentSource` <a name="resetDocumentSource" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocumentSource"></a>

```java
public void resetDocumentSource()
```

##### `resetJobExecutionsRetryConfig` <a name="resetJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRetryConfig"></a>

```java
public void resetJobExecutionsRetryConfig()
```

##### `resetJobExecutionsRolloutConfig` <a name="resetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRolloutConfig"></a>

```java
public void resetJobExecutionsRolloutConfig()
```

##### `resetJobTemplateArn` <a name="resetJobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobTemplateArn"></a>

```java
public void resetJobTemplateArn()
```

##### `resetPresignedUrlConfig` <a name="resetPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetPresignedUrlConfig"></a>

```java
public void resetPresignedUrlConfig()
```

##### `resetSchedulingConfig` <a name="resetSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetSchedulingConfig"></a>

```java
public void resetSchedulingConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotJob.IotJob.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetSelection` <a name="resetTargetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.resetTargetSelection"></a>

```java
public void resetTargetSelection()
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetTimeoutConfig"></a>

```java
public void resetTimeoutConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotJob.IotJob.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJob;

IotJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJob.IotJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJob;

IotJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJob;

IotJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJob;

IotJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference">IotJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference">IotJobJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference">IotJobJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference">IotJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference">IotJobSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList">IotJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference">IotJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.abortConfigInput">abortConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersionsInput">destinationPackageVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentInput">documentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentParametersInput">documentParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentSourceInput">documentSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfigInput">jobExecutionsRetryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfigInput">jobExecutionsRolloutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArnInput">jobTemplateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfigInput">presignedUrlConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfigInput">schedulingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetSelectionInput">targetSelectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.document">document</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentParameters">documentParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentSource">documentSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArn">jobTemplateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotJob.IotJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotJob.IotJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotJob.IotJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJob.IotJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJob.IotJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJob.IotJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJob.IotJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJob.IotJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJob.IotJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `abortConfig`<sup>Required</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.abortConfig"></a>

```java
public IotJobAbortConfigOutputReference getAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference">IotJobAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotJob.IotJob.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotJob.IotJob.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobExecutionsRetryConfig`<sup>Required</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfig"></a>

```java
public IotJobJobExecutionsRetryConfigOutputReference getJobExecutionsRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference">IotJobJobExecutionsRetryConfigOutputReference</a>

---

##### `jobExecutionsRolloutConfig`<sup>Required</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfig"></a>

```java
public IotJobJobExecutionsRolloutConfigOutputReference getJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference">IotJobJobExecutionsRolloutConfigOutputReference</a>

---

##### `presignedUrlConfig`<sup>Required</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfig"></a>

```java
public IotJobPresignedUrlConfigOutputReference getPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference">IotJobPresignedUrlConfigOutputReference</a>

---

##### `schedulingConfig`<sup>Required</sup> <a name="schedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfig"></a>

```java
public IotJobSchedulingConfigOutputReference getSchedulingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference">IotJobSchedulingConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotJob.IotJob.property.tags"></a>

```java
public IotJobTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList">IotJobTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfig"></a>

```java
public IotJobTimeoutConfigOutputReference getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference">IotJobTimeoutConfigOutputReference</a>

---

##### `abortConfigInput`<sup>Optional</sup> <a name="abortConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.abortConfigInput"></a>

```java
public IResolvable|IotJobAbortConfig getAbortConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationPackageVersionsInput`<sup>Optional</sup> <a name="destinationPackageVersionsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersionsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentInput"></a>

```java
public java.lang.String getDocumentInput();
```

- *Type:* java.lang.String

---

##### `documentParametersInput`<sup>Optional</sup> <a name="documentParametersInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDocumentParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `documentSourceInput`<sup>Optional</sup> <a name="documentSourceInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentSourceInput"></a>

```java
public java.lang.String getDocumentSourceInput();
```

- *Type:* java.lang.String

---

##### `jobExecutionsRetryConfigInput`<sup>Optional</sup> <a name="jobExecutionsRetryConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfigInput"></a>

```java
public IResolvable|IotJobJobExecutionsRetryConfig getJobExecutionsRetryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---

##### `jobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="jobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfigInput"></a>

```java
public IResolvable|IotJobJobExecutionsRolloutConfig getJobExecutionsRolloutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `jobTemplateArnInput`<sup>Optional</sup> <a name="jobTemplateArnInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArnInput"></a>

```java
public java.lang.String getJobTemplateArnInput();
```

- *Type:* java.lang.String

---

##### `presignedUrlConfigInput`<sup>Optional</sup> <a name="presignedUrlConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfigInput"></a>

```java
public IResolvable|IotJobPresignedUrlConfig getPresignedUrlConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---

##### `schedulingConfigInput`<sup>Optional</sup> <a name="schedulingConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfigInput"></a>

```java
public IResolvable|IotJobSchedulingConfig getSchedulingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotJobTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>>

---

##### `targetSelectionInput`<sup>Optional</sup> <a name="targetSelectionInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetSelectionInput"></a>

```java
public java.lang.String getTargetSelectionInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfigInput"></a>

```java
public IResolvable|IotJobTimeoutConfig getTimeoutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJob.IotJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationPackageVersions`<sup>Required</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersions"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.iotJob.IotJob.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

---

##### `documentParameters`<sup>Required</sup> <a name="documentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDocumentParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `documentSource`<sup>Required</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentSource"></a>

```java
public java.lang.String getDocumentSource();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobTemplateArn`<sup>Required</sup> <a name="jobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArn"></a>

```java
public java.lang.String getJobTemplateArn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotJob.IotJob.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetSelection`<sup>Required</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetSelection"></a>

```java
public java.lang.String getTargetSelection();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotJob.IotJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobAbortConfig <a name="IotJobAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobAbortConfig;

IotJobAbortConfig.builder()
//  .criteriaList(IResolvable|java.util.List<IotJobAbortConfigCriteriaListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig.property.criteriaList">criteriaList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>></code> | The list of criteria that determine when and how to abort the job. |

---

##### `criteriaList`<sup>Optional</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig.property.criteriaList"></a>

```java
public IResolvable|java.util.List<IotJobAbortConfigCriteriaListStruct> getCriteriaList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>>

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#criteria_list IotJob#criteria_list}

---

### IotJobAbortConfigCriteriaListStruct <a name="IotJobAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobAbortConfigCriteriaListStruct;

IotJobAbortConfigCriteriaListStruct.builder()
//  .action(java.lang.String)
//  .failureType(java.lang.String)
//  .minNumberOfExecutedThings(java.lang.Number)
//  .thresholdPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.action">action</a></code> | <code>java.lang.String</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.failureType">failureType</a></code> | <code>java.lang.String</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#action IotJob#action}

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#failure_type IotJob#failure_type}

---

##### `minNumberOfExecutedThings`<sup>Optional</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#min_number_of_executed_things IotJob#min_number_of_executed_things}

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#threshold_percentage IotJob#threshold_percentage}

---

### IotJobConfig <a name="IotJobConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobConfig;

IotJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .jobId(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .abortConfig(IotJobAbortConfig)
//  .description(java.lang.String)
//  .destinationPackageVersions(java.util.List<java.lang.String>)
//  .document(java.lang.String)
//  .documentParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .documentSource(java.lang.String)
//  .jobExecutionsRetryConfig(IotJobJobExecutionsRetryConfig)
//  .jobExecutionsRolloutConfig(IotJobJobExecutionsRolloutConfig)
//  .jobTemplateArn(java.lang.String)
//  .presignedUrlConfig(IotJobPresignedUrlConfig)
//  .schedulingConfig(IotJobSchedulingConfig)
//  .tags(IResolvable|java.util.List<IotJobTags>)
//  .targetSelection(java.lang.String)
//  .timeoutConfig(IotJobTimeoutConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | A job identifier which must be unique for your AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | A list of things and thing groups to which the job should be sent. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | A short text description of the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.document">document</a></code> | <code>java.lang.String</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentParameters">documentParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters of an Amazon Web Services managed template that you can specify to create the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentSource">documentSource</a></code> | <code>java.lang.String</code> | An S3 link, or S3 object URL, to the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | The configuration that determines how many retries are allowed for each failure type for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobTemplateArn">jobTemplateArn</a></code> | <code>java.lang.String</code> | The ARN of the job template used to create the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>></code> | Metadata which can be used to manage the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

A job identifier which must be unique for your AWS account.

We recommend using a UUID. Alpha-numeric characters, '-' and '_' are valid for use here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_id IotJob#job_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

A list of things and thing groups to which the job should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#targets IotJob#targets}

---

##### `abortConfig`<sup>Optional</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.abortConfig"></a>

```java
public IotJobAbortConfig getAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#abort_config IotJob#abort_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A short text description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#description IotJob#description}

---

##### `destinationPackageVersions`<sup>Optional</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.destinationPackageVersions"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersions();
```

- *Type:* java.util.List<java.lang.String>

The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#destination_package_versions IotJob#destination_package_versions}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#document IotJob#document}

---

##### `documentParameters`<sup>Optional</sup> <a name="documentParameters" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDocumentParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters of an Amazon Web Services managed template that you can specify to create the job document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#document_parameters IotJob#document_parameters}

---

##### `documentSource`<sup>Optional</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentSource"></a>

```java
public java.lang.String getDocumentSource();
```

- *Type:* java.lang.String

An S3 link, or S3 object URL, to the job document.

The link is an Amazon S3 object URL and is required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#document_source IotJob#document_source}

---

##### `jobExecutionsRetryConfig`<sup>Optional</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRetryConfig"></a>

```java
public IotJobJobExecutionsRetryConfig getJobExecutionsRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

The configuration that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_executions_retry_config IotJob#job_executions_retry_config}

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRolloutConfig"></a>

```java
public IotJobJobExecutionsRolloutConfig getJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_executions_rollout_config IotJob#job_executions_rollout_config}

---

##### `jobTemplateArn`<sup>Optional</sup> <a name="jobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobTemplateArn"></a>

```java
public java.lang.String getJobTemplateArn();
```

- *Type:* java.lang.String

The ARN of the job template used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#job_template_arn IotJob#job_template_arn}

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.presignedUrlConfig"></a>

```java
public IotJobPresignedUrlConfig getPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#presigned_url_config IotJob#presigned_url_config}

---

##### `schedulingConfig`<sup>Optional</sup> <a name="schedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.schedulingConfig"></a>

```java
public IotJobSchedulingConfig getSchedulingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#scheduling_config IotJob#scheduling_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotJobTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>>

Metadata which can be used to manage the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#tags IotJob#tags}

---

##### `targetSelection`<sup>Optional</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.targetSelection"></a>

```java
public java.lang.String getTargetSelection();
```

- *Type:* java.lang.String

Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#target_selection IotJob#target_selection}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.timeoutConfig"></a>

```java
public IotJobTimeoutConfig getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#timeout_config IotJob#timeout_config}

---

### IotJobJobExecutionsRetryConfig <a name="IotJobJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRetryConfig;

IotJobJobExecutionsRetryConfig.builder()
//  .criteriaList(IResolvable|java.util.List<IotJobJobExecutionsRetryConfigCriteriaListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.property.criteriaList">criteriaList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>></code> | The list of criteria that determines how many retries are allowed for each failure type for a job. |

---

##### `criteriaList`<sup>Optional</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.property.criteriaList"></a>

```java
public IResolvable|java.util.List<IotJobJobExecutionsRetryConfigCriteriaListStruct> getCriteriaList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>>

The list of criteria that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#criteria_list IotJob#criteria_list}

---

### IotJobJobExecutionsRetryConfigCriteriaListStruct <a name="IotJobJobExecutionsRetryConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRetryConfigCriteriaListStruct;

IotJobJobExecutionsRetryConfigCriteriaListStruct.builder()
//  .failureType(java.lang.String)
//  .numberOfRetries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.failureType">failureType</a></code> | <code>java.lang.String</code> | The type of job execution failures that can initiate a job retry. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.numberOfRetries">numberOfRetries</a></code> | <code>java.lang.Number</code> | The number of retries allowed for a failure type for the job. |

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

The type of job execution failures that can initiate a job retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#failure_type IotJob#failure_type}

---

##### `numberOfRetries`<sup>Optional</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.numberOfRetries"></a>

```java
public java.lang.Number getNumberOfRetries();
```

- *Type:* java.lang.Number

The number of retries allowed for a failure type for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#number_of_retries IotJob#number_of_retries}

---

### IotJobJobExecutionsRolloutConfig <a name="IotJobJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRolloutConfig;

IotJobJobExecutionsRolloutConfig.builder()
//  .exponentialRate(IotJobJobExecutionsRolloutConfigExponentialRate)
//  .maximumPerMinute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | Allows you to create an exponential rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `exponentialRate`<sup>Optional</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.exponentialRate"></a>

```java
public IotJobJobExecutionsRolloutConfigExponentialRate getExponentialRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

Allows you to create an exponential rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#exponential_rate IotJob#exponential_rate}

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#maximum_per_minute IotJob#maximum_per_minute}

---

### IotJobJobExecutionsRolloutConfigExponentialRate <a name="IotJobJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRolloutConfigExponentialRate;

IotJobJobExecutionsRolloutConfigExponentialRate.builder()
//  .baseRatePerMinute(java.lang.Number)
//  .incrementFactor(java.lang.Number)
//  .rateIncreaseCriteria(IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Allows you to define a criteria to initiate the increase in rate of rollout for a job. |

---

##### `baseRatePerMinute`<sup>Optional</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#base_rate_per_minute IotJob#base_rate_per_minute}

---

##### `incrementFactor`<sup>Optional</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#increment_factor IotJob#increment_factor}

---

##### `rateIncreaseCriteria`<sup>Optional</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```java
public IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Allows you to define a criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#rate_increase_criteria IotJob#rate_increase_criteria}

---

### IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;

IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.builder()
//  .numberOfNotifiedThings(java.lang.Number)
//  .numberOfSucceededThings(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | The threshold for number of notified things that will initiate the increase in rate of rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | The threshold for number of succeeded things that will initiate the increase in rate of rollout. |

---

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

The threshold for number of notified things that will initiate the increase in rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#number_of_notified_things IotJob#number_of_notified_things}

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

The threshold for number of succeeded things that will initiate the increase in rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#number_of_succeeded_things IotJob#number_of_succeeded_things}

---

### IotJobPresignedUrlConfig <a name="IotJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobPresignedUrlConfig;

IotJobPresignedUrlConfig.builder()
//  .expiresInSec(java.lang.Number)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `expiresInSec`<sup>Optional</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 3600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#expires_in_sec IotJob#expires_in_sec}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#role_arn IotJob#role_arn}

---

### IotJobSchedulingConfig <a name="IotJobSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobSchedulingConfig;

IotJobSchedulingConfig.builder()
//  .endBehavior(java.lang.String)
//  .endTime(java.lang.String)
//  .maintenanceWindows(IResolvable|java.util.List<IotJobSchedulingConfigMaintenanceWindows>)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endBehavior">endBehavior</a></code> | <code>java.lang.String</code> | Specifies the end behavior for all job executions after a job reaches the selected endTime. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time a job will stop rollout of the job document to all devices in the target group for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.maintenanceWindows">maintenanceWindows</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>></code> | An optional configuration within the SchedulingConfig to setup a recurring maintenance window. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time a job will begin rollout of the job document to all devices in the target group for a job. |

---

##### `endBehavior`<sup>Optional</sup> <a name="endBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endBehavior"></a>

```java
public java.lang.String getEndBehavior();
```

- *Type:* java.lang.String

Specifies the end behavior for all job executions after a job reaches the selected endTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#end_behavior IotJob#end_behavior}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time a job will stop rollout of the job document to all devices in the target group for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#end_time IotJob#end_time}

---

##### `maintenanceWindows`<sup>Optional</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.maintenanceWindows"></a>

```java
public IResolvable|java.util.List<IotJobSchedulingConfigMaintenanceWindows> getMaintenanceWindows();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>>

An optional configuration within the SchedulingConfig to setup a recurring maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#maintenance_windows IotJob#maintenance_windows}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time a job will begin rollout of the job document to all devices in the target group for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#start_time IotJob#start_time}

---

### IotJobSchedulingConfigMaintenanceWindows <a name="IotJobSchedulingConfigMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobSchedulingConfigMaintenanceWindows;

IotJobSchedulingConfigMaintenanceWindows.builder()
//  .durationInMinutes(java.lang.Number)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | Displays the duration of the next maintenance window. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Displays the start time of the next maintenance window. |

---

##### `durationInMinutes`<sup>Optional</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

Displays the duration of the next maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#duration_in_minutes IotJob#duration_in_minutes}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Displays the start time of the next maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#start_time IotJob#start_time}

---

### IotJobTags <a name="IotJobTags" id="@cdktn/provider-awscc.iotJob.IotJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobTags;

IotJobTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotJob.IotJobTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#key IotJob#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#value IotJob#value}

---

### IotJobTimeoutConfig <a name="IotJobTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobTimeoutConfig;

IotJobTimeoutConfig.builder()
//  .inProgressTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

Specifies the amount of time, in minutes, this device has to finish execution of this job.

The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_job#in_progress_timeout_in_minutes IotJob#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobAbortConfigCriteriaListStructList <a name="IotJobAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobAbortConfigCriteriaListStructList;

new IotJobAbortConfigCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get"></a>

```java
public IotJobAbortConfigCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobAbortConfigCriteriaListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>>

---


### IotJobAbortConfigCriteriaListStructOutputReference <a name="IotJobAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobAbortConfigCriteriaListStructOutputReference;

new IotJobAbortConfigCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">resetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">resetThresholdPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```java
public void resetFailureType()
```

##### `resetMinNumberOfExecutedThings` <a name="resetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```java
public void resetMinNumberOfExecutedThings()
```

##### `resetThresholdPercentage` <a name="resetThresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```java
public void resetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">minNumberOfExecutedThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">thresholdPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```java
public java.lang.String getFailureTypeInput();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="minNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```java
public java.lang.Number getMinNumberOfExecutedThingsInput();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentageInput`<sup>Optional</sup> <a name="thresholdPercentageInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```java
public java.lang.Number getThresholdPercentageInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobAbortConfigCriteriaListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>

---


### IotJobAbortConfigOutputReference <a name="IotJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobAbortConfigOutputReference;

new IotJobAbortConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList">putCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resetCriteriaList">resetCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteriaList` <a name="putCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList"></a>

```java
public void putCriteriaList(IResolvable|java.util.List<IotJobAbortConfigCriteriaListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>>

---

##### `resetCriteriaList` <a name="resetCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resetCriteriaList"></a>

```java
public void resetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList">IotJobAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaListInput">criteriaListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaList"></a>

```java
public IotJobAbortConfigCriteriaListStructList getCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList">IotJobAbortConfigCriteriaListStructList</a>

---

##### `criteriaListInput`<sup>Optional</sup> <a name="criteriaListInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaListInput"></a>

```java
public IResolvable|java.util.List<IotJobAbortConfigCriteriaListStruct> getCriteriaListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobAbortConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---


### IotJobJobExecutionsRetryConfigCriteriaListStructList <a name="IotJobJobExecutionsRetryConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRetryConfigCriteriaListStructList;

new IotJobJobExecutionsRetryConfigCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get"></a>

```java
public IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobJobExecutionsRetryConfigCriteriaListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>>

---


### IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference <a name="IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference;

new IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetNumberOfRetries">resetNumberOfRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetFailureType"></a>

```java
public void resetFailureType()
```

##### `resetNumberOfRetries` <a name="resetNumberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```java
public void resetNumberOfRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetriesInput">numberOfRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries">numberOfRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```java
public java.lang.String getFailureTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfRetriesInput`<sup>Optional</sup> <a name="numberOfRetriesInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```java
public java.lang.Number getNumberOfRetriesInput();
```

- *Type:* java.lang.Number

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `numberOfRetries`<sup>Required</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries"></a>

```java
public java.lang.Number getNumberOfRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>

---


### IotJobJobExecutionsRetryConfigOutputReference <a name="IotJobJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRetryConfigOutputReference;

new IotJobJobExecutionsRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList">putCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resetCriteriaList">resetCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteriaList` <a name="putCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList"></a>

```java
public void putCriteriaList(IResolvable|java.util.List<IotJobJobExecutionsRetryConfigCriteriaListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>>

---

##### `resetCriteriaList` <a name="resetCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resetCriteriaList"></a>

```java
public void resetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList">IotJobJobExecutionsRetryConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaListInput">criteriaListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaList"></a>

```java
public IotJobJobExecutionsRetryConfigCriteriaListStructList getCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList">IotJobJobExecutionsRetryConfigCriteriaListStructList</a>

---

##### `criteriaListInput`<sup>Optional</sup> <a name="criteriaListInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaListInput"></a>

```java
public IResolvable|java.util.List<IotJobJobExecutionsRetryConfigCriteriaListStruct> getCriteriaListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobJobExecutionsRetryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---


### IotJobJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotJobJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference;

new IotJobJobExecutionsRolloutConfigExponentialRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">putRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">resetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">resetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">resetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateIncreaseCriteria` <a name="putRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```java
public void putRateIncreaseCriteria(IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `resetBaseRatePerMinute` <a name="resetBaseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```java
public void resetBaseRatePerMinute()
```

##### `resetIncrementFactor` <a name="resetIncrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```java
public void resetIncrementFactor()
```

##### `resetRateIncreaseCriteria` <a name="resetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```java
public void resetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">baseRatePerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">incrementFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">rateIncreaseCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```java
public IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `baseRatePerMinuteInput`<sup>Optional</sup> <a name="baseRatePerMinuteInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```java
public java.lang.Number getBaseRatePerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `incrementFactorInput`<sup>Optional</sup> <a name="incrementFactorInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```java
public java.lang.Number getIncrementFactorInput();
```

- *Type:* java.lang.Number

---

##### `rateIncreaseCriteriaInput`<sup>Optional</sup> <a name="rateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```java
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getRateIncreaseCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---


### IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference;

new IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">resetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">resetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfNotifiedThings` <a name="resetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```java
public void resetNumberOfNotifiedThings()
```

##### `resetNumberOfSucceededThings` <a name="resetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```java
public void resetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">numberOfNotifiedThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">numberOfSucceededThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfNotifiedThingsInput`<sup>Optional</sup> <a name="numberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```java
public java.lang.Number getNumberOfNotifiedThingsInput();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThingsInput`<sup>Optional</sup> <a name="numberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```java
public java.lang.Number getNumberOfSucceededThingsInput();
```

- *Type:* java.lang.Number

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### IotJobJobExecutionsRolloutConfigOutputReference <a name="IotJobJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobJobExecutionsRolloutConfigOutputReference;

new IotJobJobExecutionsRolloutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate">putExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetExponentialRate">resetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">resetMaximumPerMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExponentialRate` <a name="putExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```java
public void putExponentialRate(IotJobJobExecutionsRolloutConfigExponentialRate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---

##### `resetExponentialRate` <a name="resetExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```java
public void resetExponentialRate()
```

##### `resetMaximumPerMinute` <a name="resetMaximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```java
public void resetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">exponentialRateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximumPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exponentialRate`<sup>Required</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```java
public IotJobJobExecutionsRolloutConfigExponentialRateOutputReference getExponentialRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `exponentialRateInput`<sup>Optional</sup> <a name="exponentialRateInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```java
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRate getExponentialRateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---

##### `maximumPerMinuteInput`<sup>Optional</sup> <a name="maximumPerMinuteInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```java
public java.lang.Number getMaximumPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobJobExecutionsRolloutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---


### IotJobPresignedUrlConfigOutputReference <a name="IotJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobPresignedUrlConfigOutputReference;

new IotJobPresignedUrlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetExpiresInSec">resetExpiresInSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresInSec` <a name="resetExpiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```java
public void resetExpiresInSec()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSecInput">expiresInSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiresInSecInput`<sup>Optional</sup> <a name="expiresInSecInput" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```java
public java.lang.Number getExpiresInSecInput();
```

- *Type:* java.lang.Number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobPresignedUrlConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---


### IotJobSchedulingConfigMaintenanceWindowsList <a name="IotJobSchedulingConfigMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobSchedulingConfigMaintenanceWindowsList;

new IotJobSchedulingConfigMaintenanceWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get"></a>

```java
public IotJobSchedulingConfigMaintenanceWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobSchedulingConfigMaintenanceWindows> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>>

---


### IotJobSchedulingConfigMaintenanceWindowsOutputReference <a name="IotJobSchedulingConfigMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobSchedulingConfigMaintenanceWindowsOutputReference;

new IotJobSchedulingConfigMaintenanceWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetDurationInMinutes">resetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationInMinutes` <a name="resetDurationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```java
public void resetDurationInMinutes()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```java
public java.lang.Number getDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobSchedulingConfigMaintenanceWindows getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>

---


### IotJobSchedulingConfigOutputReference <a name="IotJobSchedulingConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobSchedulingConfigOutputReference;

new IotJobSchedulingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows">putMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndBehavior">resetEndBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetMaintenanceWindows">resetMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceWindows` <a name="putMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows"></a>

```java
public void putMaintenanceWindows(IResolvable|java.util.List<IotJobSchedulingConfigMaintenanceWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>>

---

##### `resetEndBehavior` <a name="resetEndBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndBehavior"></a>

```java
public void resetEndBehavior()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetMaintenanceWindows` <a name="resetMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetMaintenanceWindows"></a>

```java
public void resetMaintenanceWindows()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList">IotJobSchedulingConfigMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehaviorInput">endBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindowsInput">maintenanceWindowsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehavior">endBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindows"></a>

```java
public IotJobSchedulingConfigMaintenanceWindowsList getMaintenanceWindows();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList">IotJobSchedulingConfigMaintenanceWindowsList</a>

---

##### `endBehaviorInput`<sup>Optional</sup> <a name="endBehaviorInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehaviorInput"></a>

```java
public java.lang.String getEndBehaviorInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowsInput`<sup>Optional</sup> <a name="maintenanceWindowsInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindowsInput"></a>

```java
public IResolvable|java.util.List<IotJobSchedulingConfigMaintenanceWindows> getMaintenanceWindowsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endBehavior`<sup>Required</sup> <a name="endBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehavior"></a>

```java
public java.lang.String getEndBehavior();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobSchedulingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---


### IotJobTagsList <a name="IotJobTagsList" id="@cdktn/provider-awscc.iotJob.IotJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobTagsList;

new IotJobTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.get"></a>

```java
public IotJobTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>>

---


### IotJobTagsOutputReference <a name="IotJobTagsOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobTagsOutputReference;

new IotJobTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>

---


### IotJobTimeoutConfigOutputReference <a name="IotJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job.IotJobTimeoutConfigOutputReference;

new IotJobTimeoutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">resetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInProgressTimeoutInMinutes` <a name="resetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```java
public void resetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">inProgressTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="inProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTimeoutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---



