# `iotJobTemplate` Submodule <a name="`iotJobTemplate` Submodule" id="@cdktn/provider-awscc.iotJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJobTemplate <a name="IotJobTemplate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template awscc_iot_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplate;

IotJobTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .jobTemplateId(java.lang.String)
//  .abortConfig(IotJobTemplateAbortConfig)
//  .destinationPackageVersions(java.util.List<java.lang.String>)
//  .document(java.lang.String)
//  .documentSource(java.lang.String)
//  .jobArn(java.lang.String)
//  .jobExecutionsRetryConfig(IotJobTemplateJobExecutionsRetryConfig)
//  .jobExecutionsRolloutConfig(IotJobTemplateJobExecutionsRolloutConfig)
//  .maintenanceWindows(IResolvable|java.util.List<IotJobTemplateMaintenanceWindows>)
//  .presignedUrlConfig(IotJobTemplatePresignedUrlConfig)
//  .tags(IResolvable|java.util.List<IotJobTemplateTags>)
//  .timeoutConfig(IotJobTemplateTimeoutConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the Job Template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobTemplateId">jobTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.document">document</a></code> | <code>java.lang.String</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.documentSource">documentSource</a></code> | <code>java.lang.String</code> | An S3 link to the job document to use in the template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobArn">jobArn</a></code> | <code>java.lang.String</code> | Optional for copying a JobTemplate from a pre-existing Job configuration. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.maintenanceWindows">maintenanceWindows</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>></code> | Metadata that can be used to manage the JobTemplate. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the Job Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#description IotJobTemplate#description}

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobTemplateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}.

---

##### `abortConfig`<sup>Optional</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.abortConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#abort_config IotJobTemplate#abort_config}

---

##### `destinationPackageVersions`<sup>Optional</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.destinationPackageVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}.

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.document"></a>

- *Type:* java.lang.String

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#document IotJobTemplate#document}

---

##### `documentSource`<sup>Optional</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.documentSource"></a>

- *Type:* java.lang.String

An S3 link to the job document to use in the template.

Required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#document_source IotJobTemplate#document_source}

---

##### `jobArn`<sup>Optional</sup> <a name="jobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobArn"></a>

- *Type:* java.lang.String

Optional for copying a JobTemplate from a pre-existing Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_arn IotJobTemplate#job_arn}

---

##### `jobExecutionsRetryConfig`<sup>Optional</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRetryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}.

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRolloutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_rollout_config IotJobTemplate#job_executions_rollout_config}

---

##### `maintenanceWindows`<sup>Optional</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.maintenanceWindows"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}.

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.presignedUrlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#presigned_url_config IotJobTemplate#presigned_url_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>>

Metadata that can be used to manage the JobTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#tags IotJobTemplate#tags}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#timeout_config IotJobTemplate#timeout_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig">putAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig">putJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig">putJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows">putMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig">putPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig">resetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions">resetDestinationPackageVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource">resetDocumentSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn">resetJobArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig">resetJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig">resetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows">resetMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig">resetPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbortConfig` <a name="putAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig"></a>

```java
public void putAbortConfig(IotJobTemplateAbortConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---

##### `putJobExecutionsRetryConfig` <a name="putJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig"></a>

```java
public void putJobExecutionsRetryConfig(IotJobTemplateJobExecutionsRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---

##### `putJobExecutionsRolloutConfig` <a name="putJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig"></a>

```java
public void putJobExecutionsRolloutConfig(IotJobTemplateJobExecutionsRolloutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---

##### `putMaintenanceWindows` <a name="putMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows"></a>

```java
public void putMaintenanceWindows(IResolvable|java.util.List<IotJobTemplateMaintenanceWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>>

---

##### `putPresignedUrlConfig` <a name="putPresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig"></a>

```java
public void putPresignedUrlConfig(IotJobTemplatePresignedUrlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotJobTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>>

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig"></a>

```java
public void putTimeoutConfig(IotJobTemplateTimeoutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---

##### `resetAbortConfig` <a name="resetAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig"></a>

```java
public void resetAbortConfig()
```

##### `resetDestinationPackageVersions` <a name="resetDestinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions"></a>

```java
public void resetDestinationPackageVersions()
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument"></a>

```java
public void resetDocument()
```

##### `resetDocumentSource` <a name="resetDocumentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource"></a>

```java
public void resetDocumentSource()
```

##### `resetJobArn` <a name="resetJobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn"></a>

```java
public void resetJobArn()
```

##### `resetJobExecutionsRetryConfig` <a name="resetJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig"></a>

```java
public void resetJobExecutionsRetryConfig()
```

##### `resetJobExecutionsRolloutConfig` <a name="resetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig"></a>

```java
public void resetJobExecutionsRolloutConfig()
```

##### `resetMaintenanceWindows` <a name="resetMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows"></a>

```java
public void resetMaintenanceWindows()
```

##### `resetPresignedUrlConfig` <a name="resetPresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig"></a>

```java
public void resetPresignedUrlConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig"></a>

```java
public void resetTimeoutConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplate;

IotJobTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplate;

IotJobTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplate;

IotJobTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplate;

IotJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput">abortConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput">destinationPackageVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput">documentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput">documentSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput">jobArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput">jobExecutionsRetryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput">jobExecutionsRolloutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput">jobTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput">maintenanceWindowsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput">presignedUrlConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document">document</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource">documentSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn">jobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId">jobTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `abortConfig`<sup>Required</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig"></a>

```java
public IotJobTemplateAbortConfigOutputReference getAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobExecutionsRetryConfig`<sup>Required</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig"></a>

```java
public IotJobTemplateJobExecutionsRetryConfigOutputReference getJobExecutionsRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a>

---

##### `jobExecutionsRolloutConfig`<sup>Required</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig"></a>

```java
public IotJobTemplateJobExecutionsRolloutConfigOutputReference getJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a>

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows"></a>

```java
public IotJobTemplateMaintenanceWindowsList getMaintenanceWindows();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a>

---

##### `presignedUrlConfig`<sup>Required</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig"></a>

```java
public IotJobTemplatePresignedUrlConfigOutputReference getPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags"></a>

```java
public IotJobTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig"></a>

```java
public IotJobTemplateTimeoutConfigOutputReference getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a>

---

##### `abortConfigInput`<sup>Optional</sup> <a name="abortConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput"></a>

```java
public IResolvable|IotJobTemplateAbortConfig getAbortConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationPackageVersionsInput`<sup>Optional</sup> <a name="destinationPackageVersionsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput"></a>

```java
public java.lang.String getDocumentInput();
```

- *Type:* java.lang.String

---

##### `documentSourceInput`<sup>Optional</sup> <a name="documentSourceInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput"></a>

```java
public java.lang.String getDocumentSourceInput();
```

- *Type:* java.lang.String

---

##### `jobArnInput`<sup>Optional</sup> <a name="jobArnInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput"></a>

```java
public java.lang.String getJobArnInput();
```

- *Type:* java.lang.String

---

##### `jobExecutionsRetryConfigInput`<sup>Optional</sup> <a name="jobExecutionsRetryConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRetryConfig getJobExecutionsRetryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---

##### `jobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="jobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRolloutConfig getJobExecutionsRolloutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---

##### `jobTemplateIdInput`<sup>Optional</sup> <a name="jobTemplateIdInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput"></a>

```java
public java.lang.String getJobTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowsInput`<sup>Optional</sup> <a name="maintenanceWindowsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput"></a>

```java
public IResolvable|java.util.List<IotJobTemplateMaintenanceWindows> getMaintenanceWindowsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>>

---

##### `presignedUrlConfigInput`<sup>Optional</sup> <a name="presignedUrlConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput"></a>

```java
public IResolvable|IotJobTemplatePresignedUrlConfig getPresignedUrlConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotJobTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>>

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput"></a>

```java
public IResolvable|IotJobTemplateTimeoutConfig getTimeoutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationPackageVersions`<sup>Required</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

---

##### `documentSource`<sup>Required</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource"></a>

```java
public java.lang.String getDocumentSource();
```

- *Type:* java.lang.String

---

##### `jobArn`<sup>Required</sup> <a name="jobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn"></a>

```java
public java.lang.String getJobArn();
```

- *Type:* java.lang.String

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId"></a>

```java
public java.lang.String getJobTemplateId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobTemplateAbortConfig <a name="IotJobTemplateAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateAbortConfig;

IotJobTemplateAbortConfig.builder()
//  .criteriaList(IResolvable|java.util.List<IotJobTemplateAbortConfigCriteriaListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList">criteriaList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}. |

---

##### `criteriaList`<sup>Optional</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList"></a>

```java
public IResolvable|java.util.List<IotJobTemplateAbortConfigCriteriaListStruct> getCriteriaList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}.

---

### IotJobTemplateAbortConfigCriteriaListStruct <a name="IotJobTemplateAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateAbortConfigCriteriaListStruct;

IotJobTemplateAbortConfigCriteriaListStruct.builder()
//  .action(java.lang.String)
//  .failureType(java.lang.String)
//  .minNumberOfExecutedThings(java.lang.Number)
//  .thresholdPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action">action</a></code> | <code>java.lang.String</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType">failureType</a></code> | <code>java.lang.String</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#action IotJobTemplate#action}

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}

---

##### `minNumberOfExecutedThings`<sup>Optional</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#min_number_of_executed_things IotJobTemplate#min_number_of_executed_things}

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#threshold_percentage IotJobTemplate#threshold_percentage}

---

### IotJobTemplateConfig <a name="IotJobTemplateConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateConfig;

IotJobTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .jobTemplateId(java.lang.String)
//  .abortConfig(IotJobTemplateAbortConfig)
//  .destinationPackageVersions(java.util.List<java.lang.String>)
//  .document(java.lang.String)
//  .documentSource(java.lang.String)
//  .jobArn(java.lang.String)
//  .jobExecutionsRetryConfig(IotJobTemplateJobExecutionsRetryConfig)
//  .jobExecutionsRolloutConfig(IotJobTemplateJobExecutionsRolloutConfig)
//  .maintenanceWindows(IResolvable|java.util.List<IotJobTemplateMaintenanceWindows>)
//  .presignedUrlConfig(IotJobTemplatePresignedUrlConfig)
//  .tags(IResolvable|java.util.List<IotJobTemplateTags>)
//  .timeoutConfig(IotJobTemplateTimeoutConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the Job Template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId">jobTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document">document</a></code> | <code>java.lang.String</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource">documentSource</a></code> | <code>java.lang.String</code> | An S3 link to the job document to use in the template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn">jobArn</a></code> | <code>java.lang.String</code> | Optional for copying a JobTemplate from a pre-existing Job configuration. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows">maintenanceWindows</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>></code> | Metadata that can be used to manage the JobTemplate. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the Job Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#description IotJobTemplate#description}

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId"></a>

```java
public java.lang.String getJobTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}.

---

##### `abortConfig`<sup>Optional</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig"></a>

```java
public IotJobTemplateAbortConfig getAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#abort_config IotJobTemplate#abort_config}

---

##### `destinationPackageVersions`<sup>Optional</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions"></a>

```java
public java.util.List<java.lang.String> getDestinationPackageVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}.

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#document IotJobTemplate#document}

---

##### `documentSource`<sup>Optional</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource"></a>

```java
public java.lang.String getDocumentSource();
```

- *Type:* java.lang.String

An S3 link to the job document to use in the template.

Required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#document_source IotJobTemplate#document_source}

---

##### `jobArn`<sup>Optional</sup> <a name="jobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn"></a>

```java
public java.lang.String getJobArn();
```

- *Type:* java.lang.String

Optional for copying a JobTemplate from a pre-existing Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_arn IotJobTemplate#job_arn}

---

##### `jobExecutionsRetryConfig`<sup>Optional</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig"></a>

```java
public IotJobTemplateJobExecutionsRetryConfig getJobExecutionsRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}.

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig"></a>

```java
public IotJobTemplateJobExecutionsRolloutConfig getJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_rollout_config IotJobTemplate#job_executions_rollout_config}

---

##### `maintenanceWindows`<sup>Optional</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows"></a>

```java
public IResolvable|java.util.List<IotJobTemplateMaintenanceWindows> getMaintenanceWindows();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}.

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig"></a>

```java
public IotJobTemplatePresignedUrlConfig getPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#presigned_url_config IotJobTemplate#presigned_url_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotJobTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>>

Metadata that can be used to manage the JobTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#tags IotJobTemplate#tags}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig"></a>

```java
public IotJobTemplateTimeoutConfig getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#timeout_config IotJobTemplate#timeout_config}

---

### IotJobTemplateJobExecutionsRetryConfig <a name="IotJobTemplateJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRetryConfig;

IotJobTemplateJobExecutionsRetryConfig.builder()
//  .retryCriteriaList(IResolvable|java.util.List<IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList">retryCriteriaList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}. |

---

##### `retryCriteriaList`<sup>Optional</sup> <a name="retryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList"></a>

```java
public IResolvable|java.util.List<IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct> getRetryCriteriaList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}.

---

### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct;

IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.builder()
//  .failureType(java.lang.String)
//  .numberOfRetries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType">failureType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries">numberOfRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}. |

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}.

---

##### `numberOfRetries`<sup>Optional</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries"></a>

```java
public java.lang.Number getNumberOfRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}.

---

### IotJobTemplateJobExecutionsRolloutConfig <a name="IotJobTemplateJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRolloutConfig;

IotJobTemplateJobExecutionsRolloutConfig.builder()
//  .exponentialRolloutRate(IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate)
//  .maximumPerMinute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate">exponentialRolloutRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `exponentialRolloutRate`<sup>Optional</sup> <a name="exponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate"></a>

```java
public IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate getExponentialRolloutRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

The rate of increase for a job rollout.

This parameter allows you to define an exponential rate for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#exponential_rollout_rate IotJobTemplate#exponential_rollout_rate}

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maximum_per_minute IotJobTemplate#maximum_per_minute}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate;

IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.builder()
//  .baseRatePerMinute(java.lang.Number)
//  .incrementFactor(java.lang.Number)
//  .rateIncreaseCriteria(IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | The criteria to initiate the increase in rate of rollout for a job. |

---

##### `baseRatePerMinute`<sup>Optional</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

This parameter allows you to define the initial rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#base_rate_per_minute IotJobTemplate#base_rate_per_minute}

---

##### `incrementFactor`<sup>Optional</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#increment_factor IotJobTemplate#increment_factor}

---

##### `rateIncreaseCriteria`<sup>Optional</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria"></a>

```java
public IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

The criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#rate_increase_criteria IotJobTemplate#rate_increase_criteria}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria;

IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.builder()
//  .numberOfNotifiedThings(java.lang.Number)
//  .numberOfSucceededThings(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}. |

---

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}.

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}.

---

### IotJobTemplateMaintenanceWindows <a name="IotJobTemplateMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateMaintenanceWindows;

IotJobTemplateMaintenanceWindows.builder()
//  .durationInMinutes(java.lang.Number)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}. |

---

##### `durationInMinutes`<sup>Optional</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}.

---

### IotJobTemplatePresignedUrlConfig <a name="IotJobTemplatePresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplatePresignedUrlConfig;

IotJobTemplatePresignedUrlConfig.builder()
//  .expiresInSec(java.lang.Number)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | How number (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `expiresInSec`<sup>Optional</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

How number (in seconds) pre-signed URLs are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#expires_in_sec IotJobTemplate#expires_in_sec}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored.

The role must also grant permission for IoT to download the files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#role_arn IotJobTemplate#role_arn}

---

### IotJobTemplateTags <a name="IotJobTemplateTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateTags;

IotJobTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#key IotJobTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#value IotJobTemplate#value}

---

### IotJobTemplateTimeoutConfig <a name="IotJobTemplateTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateTimeoutConfig;

IotJobTemplateTimeoutConfig.builder()
//  .inProgressTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#in_progress_timeout_in_minutes IotJobTemplate#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobTemplateAbortConfigCriteriaListStructList <a name="IotJobTemplateAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateAbortConfigCriteriaListStructList;

new IotJobTemplateAbortConfigCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get"></a>

```java
public IotJobTemplateAbortConfigCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobTemplateAbortConfigCriteriaListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>>

---


### IotJobTemplateAbortConfigCriteriaListStructOutputReference <a name="IotJobTemplateAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateAbortConfigCriteriaListStructOutputReference;

new IotJobTemplateAbortConfigCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">resetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">resetThresholdPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```java
public void resetFailureType()
```

##### `resetMinNumberOfExecutedThings` <a name="resetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```java
public void resetMinNumberOfExecutedThings()
```

##### `resetThresholdPercentage` <a name="resetThresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```java
public void resetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">minNumberOfExecutedThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">thresholdPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```java
public java.lang.String getFailureTypeInput();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="minNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```java
public java.lang.Number getMinNumberOfExecutedThingsInput();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentageInput`<sup>Optional</sup> <a name="thresholdPercentageInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```java
public java.lang.Number getThresholdPercentageInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateAbortConfigCriteriaListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>

---


### IotJobTemplateAbortConfigOutputReference <a name="IotJobTemplateAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateAbortConfigOutputReference;

new IotJobTemplateAbortConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList">putCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList">resetCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteriaList` <a name="putCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList"></a>

```java
public void putCriteriaList(IResolvable|java.util.List<IotJobTemplateAbortConfigCriteriaListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>>

---

##### `resetCriteriaList` <a name="resetCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList"></a>

```java
public void resetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput">criteriaListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList"></a>

```java
public IotJobTemplateAbortConfigCriteriaListStructList getCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a>

---

##### `criteriaListInput`<sup>Optional</sup> <a name="criteriaListInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput"></a>

```java
public IResolvable|java.util.List<IotJobTemplateAbortConfigCriteriaListStruct> getCriteriaListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateAbortConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---


### IotJobTemplateJobExecutionsRetryConfigOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRetryConfigOutputReference;

new IotJobTemplateJobExecutionsRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList">putRetryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList">resetRetryCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetryCriteriaList` <a name="putRetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList"></a>

```java
public void putRetryCriteriaList(IResolvable|java.util.List<IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>>

---

##### `resetRetryCriteriaList` <a name="resetRetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList"></a>

```java
public void resetRetryCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList">retryCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput">retryCriteriaListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retryCriteriaList`<sup>Required</sup> <a name="retryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList"></a>

```java
public IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList getRetryCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a>

---

##### `retryCriteriaListInput`<sup>Optional</sup> <a name="retryCriteriaListInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput"></a>

```java
public IResolvable|java.util.List<IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct> getRetryCriteriaListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRetryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList;

new IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get"></a>

```java
public IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>>

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference;

new IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries">resetNumberOfRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType"></a>

```java
public void resetFailureType()
```

##### `resetNumberOfRetries` <a name="resetNumberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```java
public void resetNumberOfRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput">numberOfRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries">numberOfRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput"></a>

```java
public java.lang.String getFailureTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfRetriesInput`<sup>Optional</sup> <a name="numberOfRetriesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```java
public java.lang.Number getNumberOfRetriesInput();
```

- *Type:* java.lang.Number

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `numberOfRetries`<sup>Required</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries"></a>

```java
public java.lang.Number getNumberOfRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference;

new IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria">putRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute">resetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor">resetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria">resetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateIncreaseCriteria` <a name="putRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria"></a>

```java
public void putRateIncreaseCriteria(IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---

##### `resetBaseRatePerMinute` <a name="resetBaseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute"></a>

```java
public void resetBaseRatePerMinute()
```

##### `resetIncrementFactor` <a name="resetIncrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor"></a>

```java
public void resetIncrementFactor()
```

##### `resetRateIncreaseCriteria` <a name="resetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria"></a>

```java
public void resetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput">baseRatePerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput">incrementFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput">rateIncreaseCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria"></a>

```java
public IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a>

---

##### `baseRatePerMinuteInput`<sup>Optional</sup> <a name="baseRatePerMinuteInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput"></a>

```java
public java.lang.Number getBaseRatePerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `incrementFactorInput`<sup>Optional</sup> <a name="incrementFactorInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput"></a>

```java
public java.lang.Number getIncrementFactorInput();
```

- *Type:* java.lang.Number

---

##### `rateIncreaseCriteriaInput`<sup>Optional</sup> <a name="rateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria getRateIncreaseCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference;

new IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">resetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">resetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfNotifiedThings` <a name="resetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```java
public void resetNumberOfNotifiedThings()
```

##### `resetNumberOfSucceededThings` <a name="resetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```java
public void resetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">numberOfNotifiedThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">numberOfSucceededThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfNotifiedThingsInput`<sup>Optional</sup> <a name="numberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```java
public java.lang.Number getNumberOfNotifiedThingsInput();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThingsInput`<sup>Optional</sup> <a name="numberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```java
public java.lang.Number getNumberOfSucceededThingsInput();
```

- *Type:* java.lang.Number

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---


### IotJobTemplateJobExecutionsRolloutConfigOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateJobExecutionsRolloutConfigOutputReference;

new IotJobTemplateJobExecutionsRolloutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate">putExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate">resetExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">resetMaximumPerMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExponentialRolloutRate` <a name="putExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate"></a>

```java
public void putExponentialRolloutRate(IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---

##### `resetExponentialRolloutRate` <a name="resetExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate"></a>

```java
public void resetExponentialRolloutRate()
```

##### `resetMaximumPerMinute` <a name="resetMaximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```java
public void resetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate">exponentialRolloutRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput">exponentialRolloutRateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximumPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exponentialRolloutRate`<sup>Required</sup> <a name="exponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate"></a>

```java
public IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference getExponentialRolloutRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a>

---

##### `exponentialRolloutRateInput`<sup>Optional</sup> <a name="exponentialRolloutRateInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate getExponentialRolloutRateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---

##### `maximumPerMinuteInput`<sup>Optional</sup> <a name="maximumPerMinuteInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```java
public java.lang.Number getMaximumPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateJobExecutionsRolloutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---


### IotJobTemplateMaintenanceWindowsList <a name="IotJobTemplateMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateMaintenanceWindowsList;

new IotJobTemplateMaintenanceWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get"></a>

```java
public IotJobTemplateMaintenanceWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobTemplateMaintenanceWindows> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>>

---


### IotJobTemplateMaintenanceWindowsOutputReference <a name="IotJobTemplateMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateMaintenanceWindowsOutputReference;

new IotJobTemplateMaintenanceWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes">resetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationInMinutes` <a name="resetDurationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```java
public void resetDurationInMinutes()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```java
public java.lang.Number getDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateMaintenanceWindows getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>

---


### IotJobTemplatePresignedUrlConfigOutputReference <a name="IotJobTemplatePresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplatePresignedUrlConfigOutputReference;

new IotJobTemplatePresignedUrlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec">resetExpiresInSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresInSec` <a name="resetExpiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```java
public void resetExpiresInSec()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput">expiresInSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiresInSecInput`<sup>Optional</sup> <a name="expiresInSecInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```java
public java.lang.Number getExpiresInSecInput();
```

- *Type:* java.lang.Number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplatePresignedUrlConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---


### IotJobTemplateTagsList <a name="IotJobTemplateTagsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateTagsList;

new IotJobTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get"></a>

```java
public IotJobTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotJobTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>>

---


### IotJobTemplateTagsOutputReference <a name="IotJobTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateTagsOutputReference;

new IotJobTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>

---


### IotJobTemplateTimeoutConfigOutputReference <a name="IotJobTemplateTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_job_template.IotJobTemplateTimeoutConfigOutputReference;

new IotJobTemplateTimeoutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">resetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInProgressTimeoutInMinutes` <a name="resetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```java
public void resetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">inProgressTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="inProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotJobTemplateTimeoutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---



