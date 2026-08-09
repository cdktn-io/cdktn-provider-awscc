# `iotJobTemplate` Submodule <a name="`iotJobTemplate` Submodule" id="@cdktn/provider-awscc.iotJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJobTemplate <a name="IotJobTemplate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template awscc_iot_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  job_template_id: str,
  abort_config: IotJobTemplateAbortConfig = None,
  destination_package_versions: typing.List[str] = None,
  document: str = None,
  document_source: str = None,
  job_arn: str = None,
  job_executions_retry_config: IotJobTemplateJobExecutionsRetryConfig = None,
  job_executions_rollout_config: IotJobTemplateJobExecutionsRolloutConfig = None,
  maintenance_windows: IResolvable | typing.List[IotJobTemplateMaintenanceWindows] = None,
  presigned_url_config: IotJobTemplatePresignedUrlConfig = None,
  tags: IResolvable | typing.List[IotJobTemplateTags] = None,
  timeout_config: IotJobTemplateTimeoutConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the Job Template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobTemplateId">job_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.destinationPackageVersions">destination_package_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.document">document</a></code> | <code>str</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.documentSource">document_source</a></code> | <code>str</code> | An S3 link to the job document to use in the template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobArn">job_arn</a></code> | <code>str</code> | Optional for copying a JobTemplate from a pre-existing Job configuration. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRetryConfig">job_executions_retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.maintenanceWindows">maintenance_windows</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.presignedUrlConfig">presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]</code> | Metadata that can be used to manage the JobTemplate. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.description"></a>

- *Type:* str

A description of the Job Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#description IotJobTemplate#description}

---

##### `job_template_id`<sup>Required</sup> <a name="job_template_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}.

---

##### `abort_config`<sup>Optional</sup> <a name="abort_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.abortConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#abort_config IotJobTemplate#abort_config}

---

##### `destination_package_versions`<sup>Optional</sup> <a name="destination_package_versions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.destinationPackageVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}.

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.document"></a>

- *Type:* str

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#document IotJobTemplate#document}

---

##### `document_source`<sup>Optional</sup> <a name="document_source" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.documentSource"></a>

- *Type:* str

An S3 link to the job document to use in the template.

Required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#document_source IotJobTemplate#document_source}

---

##### `job_arn`<sup>Optional</sup> <a name="job_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobArn"></a>

- *Type:* str

Optional for copying a JobTemplate from a pre-existing Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_arn IotJobTemplate#job_arn}

---

##### `job_executions_retry_config`<sup>Optional</sup> <a name="job_executions_retry_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRetryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}.

---

##### `job_executions_rollout_config`<sup>Optional</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.jobExecutionsRolloutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_executions_rollout_config IotJobTemplate#job_executions_rollout_config}

---

##### `maintenance_windows`<sup>Optional</sup> <a name="maintenance_windows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.maintenanceWindows"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}.

---

##### `presigned_url_config`<sup>Optional</sup> <a name="presigned_url_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.presignedUrlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#presigned_url_config IotJobTemplate#presigned_url_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]

Metadata that can be used to manage the JobTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#tags IotJobTemplate#tags}

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#timeout_config IotJobTemplate#timeout_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig">put_abort_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig">put_job_executions_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig">put_job_executions_rollout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows">put_maintenance_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig">put_presigned_url_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig">put_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig">reset_abort_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions">reset_destination_package_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument">reset_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource">reset_document_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn">reset_job_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig">reset_job_executions_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig">reset_job_executions_rollout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows">reset_maintenance_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig">reset_presigned_url_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig">reset_timeout_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_abort_config` <a name="put_abort_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig"></a>

```python
def put_abort_config(
  criteria_list: IResolvable | typing.List[IotJobTemplateAbortConfigCriteriaListStruct] = None
) -> None
```

###### `criteria_list`<sup>Optional</sup> <a name="criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig.parameter.criteriaList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}.

---

##### `put_job_executions_retry_config` <a name="put_job_executions_retry_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig"></a>

```python
def put_job_executions_retry_config(
  retry_criteria_list: IResolvable | typing.List[IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct] = None
) -> None
```

###### `retry_criteria_list`<sup>Optional</sup> <a name="retry_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig.parameter.retryCriteriaList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}.

---

##### `put_job_executions_rollout_config` <a name="put_job_executions_rollout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig"></a>

```python
def put_job_executions_rollout_config(
  exponential_rollout_rate: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate = None,
  maximum_per_minute: typing.Union[int, float] = None
) -> None
```

###### `exponential_rollout_rate`<sup>Optional</sup> <a name="exponential_rollout_rate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig.parameter.exponentialRolloutRate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

The rate of increase for a job rollout.

This parameter allows you to define an exponential rate for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#exponential_rollout_rate IotJobTemplate#exponential_rollout_rate}

---

###### `maximum_per_minute`<sup>Optional</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig.parameter.maximumPerMinute"></a>

- *Type:* typing.Union[int, float]

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#maximum_per_minute IotJobTemplate#maximum_per_minute}

---

##### `put_maintenance_windows` <a name="put_maintenance_windows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows"></a>

```python
def put_maintenance_windows(
  value: IResolvable | typing.List[IotJobTemplateMaintenanceWindows]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]

---

##### `put_presigned_url_config` <a name="put_presigned_url_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig"></a>

```python
def put_presigned_url_config(
  expires_in_sec: typing.Union[int, float] = None,
  role_arn: str = None
) -> None
```

###### `expires_in_sec`<sup>Optional</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig.parameter.expiresInSec"></a>

- *Type:* typing.Union[int, float]

How number (in seconds) pre-signed URLs are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#expires_in_sec IotJobTemplate#expires_in_sec}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig.parameter.roleArn"></a>

- *Type:* str

The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored.

The role must also grant permission for IoT to download the files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#role_arn IotJobTemplate#role_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotJobTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]

---

##### `put_timeout_config` <a name="put_timeout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig"></a>

```python
def put_timeout_config(
  in_progress_timeout_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `in_progress_timeout_in_minutes`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig.parameter.inProgressTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#in_progress_timeout_in_minutes IotJobTemplate#in_progress_timeout_in_minutes}

---

##### `reset_abort_config` <a name="reset_abort_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig"></a>

```python
def reset_abort_config() -> None
```

##### `reset_destination_package_versions` <a name="reset_destination_package_versions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions"></a>

```python
def reset_destination_package_versions() -> None
```

##### `reset_document` <a name="reset_document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument"></a>

```python
def reset_document() -> None
```

##### `reset_document_source` <a name="reset_document_source" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource"></a>

```python
def reset_document_source() -> None
```

##### `reset_job_arn` <a name="reset_job_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn"></a>

```python
def reset_job_arn() -> None
```

##### `reset_job_executions_retry_config` <a name="reset_job_executions_retry_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig"></a>

```python
def reset_job_executions_retry_config() -> None
```

##### `reset_job_executions_rollout_config` <a name="reset_job_executions_rollout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig"></a>

```python
def reset_job_executions_rollout_config() -> None
```

##### `reset_maintenance_windows` <a name="reset_maintenance_windows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows"></a>

```python
def reset_maintenance_windows() -> None
```

##### `reset_presigned_url_config` <a name="reset_presigned_url_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig"></a>

```python
def reset_presigned_url_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout_config` <a name="reset_timeout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig"></a>

```python
def reset_timeout_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplate.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotJobTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig">job_executions_retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows">maintenance_windows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig">presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput">abort_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput">destination_package_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput">document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput">document_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput">job_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput">job_executions_retry_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput">job_executions_rollout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput">job_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput">maintenance_windows_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput">presigned_url_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput">timeout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions">destination_package_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document">document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource">document_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn">job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId">job_template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `abort_config`<sup>Required</sup> <a name="abort_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig"></a>

```python
abort_config: IotJobTemplateAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_executions_retry_config`<sup>Required</sup> <a name="job_executions_retry_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig"></a>

```python
job_executions_retry_config: IotJobTemplateJobExecutionsRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a>

---

##### `job_executions_rollout_config`<sup>Required</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig"></a>

```python
job_executions_rollout_config: IotJobTemplateJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a>

---

##### `maintenance_windows`<sup>Required</sup> <a name="maintenance_windows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows"></a>

```python
maintenance_windows: IotJobTemplateMaintenanceWindowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a>

---

##### `presigned_url_config`<sup>Required</sup> <a name="presigned_url_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig"></a>

```python
presigned_url_config: IotJobTemplatePresignedUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags"></a>

```python
tags: IotJobTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a>

---

##### `timeout_config`<sup>Required</sup> <a name="timeout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig"></a>

```python
timeout_config: IotJobTemplateTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a>

---

##### `abort_config_input`<sup>Optional</sup> <a name="abort_config_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput"></a>

```python
abort_config_input: IResolvable | IotJobTemplateAbortConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_package_versions_input`<sup>Optional</sup> <a name="destination_package_versions_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput"></a>

```python
destination_package_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document_input`<sup>Optional</sup> <a name="document_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput"></a>

```python
document_input: str
```

- *Type:* str

---

##### `document_source_input`<sup>Optional</sup> <a name="document_source_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput"></a>

```python
document_source_input: str
```

- *Type:* str

---

##### `job_arn_input`<sup>Optional</sup> <a name="job_arn_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput"></a>

```python
job_arn_input: str
```

- *Type:* str

---

##### `job_executions_retry_config_input`<sup>Optional</sup> <a name="job_executions_retry_config_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput"></a>

```python
job_executions_retry_config_input: IResolvable | IotJobTemplateJobExecutionsRetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---

##### `job_executions_rollout_config_input`<sup>Optional</sup> <a name="job_executions_rollout_config_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput"></a>

```python
job_executions_rollout_config_input: IResolvable | IotJobTemplateJobExecutionsRolloutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---

##### `job_template_id_input`<sup>Optional</sup> <a name="job_template_id_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput"></a>

```python
job_template_id_input: str
```

- *Type:* str

---

##### `maintenance_windows_input`<sup>Optional</sup> <a name="maintenance_windows_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput"></a>

```python
maintenance_windows_input: IResolvable | typing.List[IotJobTemplateMaintenanceWindows]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]

---

##### `presigned_url_config_input`<sup>Optional</sup> <a name="presigned_url_config_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput"></a>

```python
presigned_url_config_input: IResolvable | IotJobTemplatePresignedUrlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotJobTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]

---

##### `timeout_config_input`<sup>Optional</sup> <a name="timeout_config_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput"></a>

```python
timeout_config_input: IResolvable | IotJobTemplateTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_package_versions`<sup>Required</sup> <a name="destination_package_versions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions"></a>

```python
destination_package_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document"></a>

```python
document: str
```

- *Type:* str

---

##### `document_source`<sup>Required</sup> <a name="document_source" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource"></a>

```python
document_source: str
```

- *Type:* str

---

##### `job_arn`<sup>Required</sup> <a name="job_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn"></a>

```python
job_arn: str
```

- *Type:* str

---

##### `job_template_id`<sup>Required</sup> <a name="job_template_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId"></a>

```python
job_template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobTemplateAbortConfig <a name="IotJobTemplateAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateAbortConfig(
  criteria_list: IResolvable | typing.List[IotJobTemplateAbortConfigCriteriaListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList">criteria_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}. |

---

##### `criteria_list`<sup>Optional</sup> <a name="criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList"></a>

```python
criteria_list: IResolvable | typing.List[IotJobTemplateAbortConfigCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}.

---

### IotJobTemplateAbortConfigCriteriaListStruct <a name="IotJobTemplateAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct(
  action: str = None,
  failure_type: str = None,
  min_number_of_executed_things: typing.Union[int, float] = None,
  threshold_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action">action</a></code> | <code>str</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType">failure_type</a></code> | <code>str</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action"></a>

```python
action: str
```

- *Type:* str

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#action IotJobTemplate#action}

---

##### `failure_type`<sup>Optional</sup> <a name="failure_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}

---

##### `min_number_of_executed_things`<sup>Optional</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#min_number_of_executed_things IotJobTemplate#min_number_of_executed_things}

---

##### `threshold_percentage`<sup>Optional</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#threshold_percentage IotJobTemplate#threshold_percentage}

---

### IotJobTemplateConfig <a name="IotJobTemplateConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  job_template_id: str,
  abort_config: IotJobTemplateAbortConfig = None,
  destination_package_versions: typing.List[str] = None,
  document: str = None,
  document_source: str = None,
  job_arn: str = None,
  job_executions_retry_config: IotJobTemplateJobExecutionsRetryConfig = None,
  job_executions_rollout_config: IotJobTemplateJobExecutionsRolloutConfig = None,
  maintenance_windows: IResolvable | typing.List[IotJobTemplateMaintenanceWindows] = None,
  presigned_url_config: IotJobTemplatePresignedUrlConfig = None,
  tags: IResolvable | typing.List[IotJobTemplateTags] = None,
  timeout_config: IotJobTemplateTimeoutConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description">description</a></code> | <code>str</code> | A description of the Job Template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId">job_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions">destination_package_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document">document</a></code> | <code>str</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource">document_source</a></code> | <code>str</code> | An S3 link to the job document to use in the template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn">job_arn</a></code> | <code>str</code> | Optional for copying a JobTemplate from a pre-existing Job configuration. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig">job_executions_retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows">maintenance_windows</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig">presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]</code> | Metadata that can be used to manage the JobTemplate. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the Job Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#description IotJobTemplate#description}

---

##### `job_template_id`<sup>Required</sup> <a name="job_template_id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId"></a>

```python
job_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}.

---

##### `abort_config`<sup>Optional</sup> <a name="abort_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig"></a>

```python
abort_config: IotJobTemplateAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#abort_config IotJobTemplate#abort_config}

---

##### `destination_package_versions`<sup>Optional</sup> <a name="destination_package_versions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions"></a>

```python
destination_package_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}.

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document"></a>

```python
document: str
```

- *Type:* str

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#document IotJobTemplate#document}

---

##### `document_source`<sup>Optional</sup> <a name="document_source" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource"></a>

```python
document_source: str
```

- *Type:* str

An S3 link to the job document to use in the template.

Required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#document_source IotJobTemplate#document_source}

---

##### `job_arn`<sup>Optional</sup> <a name="job_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn"></a>

```python
job_arn: str
```

- *Type:* str

Optional for copying a JobTemplate from a pre-existing Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_arn IotJobTemplate#job_arn}

---

##### `job_executions_retry_config`<sup>Optional</sup> <a name="job_executions_retry_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig"></a>

```python
job_executions_retry_config: IotJobTemplateJobExecutionsRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}.

---

##### `job_executions_rollout_config`<sup>Optional</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig"></a>

```python
job_executions_rollout_config: IotJobTemplateJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#job_executions_rollout_config IotJobTemplate#job_executions_rollout_config}

---

##### `maintenance_windows`<sup>Optional</sup> <a name="maintenance_windows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows"></a>

```python
maintenance_windows: IResolvable | typing.List[IotJobTemplateMaintenanceWindows]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}.

---

##### `presigned_url_config`<sup>Optional</sup> <a name="presigned_url_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig"></a>

```python
presigned_url_config: IotJobTemplatePresignedUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#presigned_url_config IotJobTemplate#presigned_url_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotJobTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]

Metadata that can be used to manage the JobTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#tags IotJobTemplate#tags}

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig"></a>

```python
timeout_config: IotJobTemplateTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#timeout_config IotJobTemplate#timeout_config}

---

### IotJobTemplateJobExecutionsRetryConfig <a name="IotJobTemplateJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig(
  retry_criteria_list: IResolvable | typing.List[IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList">retry_criteria_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}. |

---

##### `retry_criteria_list`<sup>Optional</sup> <a name="retry_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList"></a>

```python
retry_criteria_list: IResolvable | typing.List[IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}.

---

### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct(
  failure_type: str = None,
  number_of_retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType">failure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries">number_of_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}. |

---

##### `failure_type`<sup>Optional</sup> <a name="failure_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}.

---

##### `number_of_retries`<sup>Optional</sup> <a name="number_of_retries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries"></a>

```python
number_of_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}.

---

### IotJobTemplateJobExecutionsRolloutConfig <a name="IotJobTemplateJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig(
  exponential_rollout_rate: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate = None,
  maximum_per_minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate">exponential_rollout_rate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `exponential_rollout_rate`<sup>Optional</sup> <a name="exponential_rollout_rate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate"></a>

```python
exponential_rollout_rate: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

The rate of increase for a job rollout.

This parameter allows you to define an exponential rate for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#exponential_rollout_rate IotJobTemplate#exponential_rollout_rate}

---

##### `maximum_per_minute`<sup>Optional</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#maximum_per_minute IotJobTemplate#maximum_per_minute}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate(
  base_rate_per_minute: typing.Union[int, float] = None,
  increment_factor: typing.Union[int, float] = None,
  rate_increase_criteria: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | The criteria to initiate the increase in rate of rollout for a job. |

---

##### `base_rate_per_minute`<sup>Optional</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

This parameter allows you to define the initial rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#base_rate_per_minute IotJobTemplate#base_rate_per_minute}

---

##### `increment_factor`<sup>Optional</sup> <a name="increment_factor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#increment_factor IotJobTemplate#increment_factor}

---

##### `rate_increase_criteria`<sup>Optional</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

The criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#rate_increase_criteria IotJobTemplate#rate_increase_criteria}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria(
  number_of_notified_things: typing.Union[int, float] = None,
  number_of_succeeded_things: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}. |

---

##### `number_of_notified_things`<sup>Optional</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}.

---

##### `number_of_succeeded_things`<sup>Optional</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}.

---

### IotJobTemplateMaintenanceWindows <a name="IotJobTemplateMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateMaintenanceWindows(
  duration_in_minutes: typing.Union[int, float] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}.

---

### IotJobTemplatePresignedUrlConfig <a name="IotJobTemplatePresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplatePresignedUrlConfig(
  expires_in_sec: typing.Union[int, float] = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec">expires_in_sec</a></code> | <code>typing.Union[int, float]</code> | How number (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `expires_in_sec`<sup>Optional</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec"></a>

```python
expires_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How number (in seconds) pre-signed URLs are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#expires_in_sec IotJobTemplate#expires_in_sec}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored.

The role must also grant permission for IoT to download the files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#role_arn IotJobTemplate#role_arn}

---

### IotJobTemplateTags <a name="IotJobTemplateTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#key IotJobTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#value IotJobTemplate#value}

---

### IotJobTemplateTimeoutConfig <a name="IotJobTemplateTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateTimeoutConfig(
  in_progress_timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `in_progress_timeout_in_minutes`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#in_progress_timeout_in_minutes IotJobTemplate#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobTemplateAbortConfigCriteriaListStructList <a name="IotJobTemplateAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotJobTemplateAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotJobTemplateAbortConfigCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]

---


### IotJobTemplateAbortConfigCriteriaListStructOutputReference <a name="IotJobTemplateAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType">reset_failure_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">reset_min_number_of_executed_things</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">reset_threshold_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_failure_type` <a name="reset_failure_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```python
def reset_failure_type() -> None
```

##### `reset_min_number_of_executed_things` <a name="reset_min_number_of_executed_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```python
def reset_min_number_of_executed_things() -> None
```

##### `reset_threshold_percentage` <a name="reset_threshold_percentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```python
def reset_threshold_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">failure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">min_number_of_executed_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">threshold_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `failure_type_input`<sup>Optional</sup> <a name="failure_type_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```python
failure_type_input: str
```

- *Type:* str

---

##### `min_number_of_executed_things_input`<sup>Optional</sup> <a name="min_number_of_executed_things_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```python
min_number_of_executed_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage_input`<sup>Optional</sup> <a name="threshold_percentage_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```python
threshold_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `min_number_of_executed_things`<sup>Required</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage`<sup>Required</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateAbortConfigCriteriaListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>

---


### IotJobTemplateAbortConfigOutputReference <a name="IotJobTemplateAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateAbortConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList">put_criteria_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList">reset_criteria_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria_list` <a name="put_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList"></a>

```python
def put_criteria_list(
  value: IResolvable | typing.List[IotJobTemplateAbortConfigCriteriaListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]

---

##### `reset_criteria_list` <a name="reset_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList"></a>

```python
def reset_criteria_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList">criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput">criteria_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_list`<sup>Required</sup> <a name="criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList"></a>

```python
criteria_list: IotJobTemplateAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a>

---

##### `criteria_list_input`<sup>Optional</sup> <a name="criteria_list_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput"></a>

```python
criteria_list_input: IResolvable | typing.List[IotJobTemplateAbortConfigCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateAbortConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---


### IotJobTemplateJobExecutionsRetryConfigOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList">put_retry_criteria_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList">reset_retry_criteria_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_retry_criteria_list` <a name="put_retry_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList"></a>

```python
def put_retry_criteria_list(
  value: IResolvable | typing.List[IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]

---

##### `reset_retry_criteria_list` <a name="reset_retry_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList"></a>

```python
def reset_retry_criteria_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList">retry_criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput">retry_criteria_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry_criteria_list`<sup>Required</sup> <a name="retry_criteria_list" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList"></a>

```python
retry_criteria_list: IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a>

---

##### `retry_criteria_list_input`<sup>Optional</sup> <a name="retry_criteria_list_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput"></a>

```python
retry_criteria_list_input: IResolvable | typing.List[IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateJobExecutionsRetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>]

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType">reset_failure_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries">reset_number_of_retries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_type` <a name="reset_failure_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType"></a>

```python
def reset_failure_type() -> None
```

##### `reset_number_of_retries` <a name="reset_number_of_retries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```python
def reset_number_of_retries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput">failure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput">number_of_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries">number_of_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_type_input`<sup>Optional</sup> <a name="failure_type_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput"></a>

```python
failure_type_input: str
```

- *Type:* str

---

##### `number_of_retries_input`<sup>Optional</sup> <a name="number_of_retries_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```python
number_of_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `number_of_retries`<sup>Required</sup> <a name="number_of_retries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries"></a>

```python
number_of_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria">put_rate_increase_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute">reset_base_rate_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor">reset_increment_factor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria">reset_rate_increase_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rate_increase_criteria` <a name="put_rate_increase_criteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria"></a>

```python
def put_rate_increase_criteria(
  number_of_notified_things: typing.Union[int, float] = None,
  number_of_succeeded_things: typing.Union[int, float] = None
) -> None
```

###### `number_of_notified_things`<sup>Optional</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria.parameter.numberOfNotifiedThings"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}.

---

###### `number_of_succeeded_things`<sup>Optional</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria.parameter.numberOfSucceededThings"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}.

---

##### `reset_base_rate_per_minute` <a name="reset_base_rate_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute"></a>

```python
def reset_base_rate_per_minute() -> None
```

##### `reset_increment_factor` <a name="reset_increment_factor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor"></a>

```python
def reset_increment_factor() -> None
```

##### `reset_rate_increase_criteria` <a name="reset_rate_increase_criteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria"></a>

```python
def reset_rate_increase_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput">base_rate_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput">increment_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput">rate_increase_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_increase_criteria`<sup>Required</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a>

---

##### `base_rate_per_minute_input`<sup>Optional</sup> <a name="base_rate_per_minute_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput"></a>

```python
base_rate_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor_input`<sup>Optional</sup> <a name="increment_factor_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput"></a>

```python
increment_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_increase_criteria_input`<sup>Optional</sup> <a name="rate_increase_criteria_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```python
rate_increase_criteria_input: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---

##### `base_rate_per_minute`<sup>Required</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor`<sup>Required</sup> <a name="increment_factor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">reset_number_of_notified_things</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">reset_number_of_succeeded_things</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_notified_things` <a name="reset_number_of_notified_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```python
def reset_number_of_notified_things() -> None
```

##### `reset_number_of_succeeded_things` <a name="reset_number_of_succeeded_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```python
def reset_number_of_succeeded_things() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">number_of_notified_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">number_of_succeeded_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_notified_things_input`<sup>Optional</sup> <a name="number_of_notified_things_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```python
number_of_notified_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things_input`<sup>Optional</sup> <a name="number_of_succeeded_things_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```python
number_of_succeeded_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_notified_things`<sup>Required</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things`<sup>Required</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---


### IotJobTemplateJobExecutionsRolloutConfigOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate">put_exponential_rollout_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate">reset_exponential_rollout_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">reset_maximum_per_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exponential_rollout_rate` <a name="put_exponential_rollout_rate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate"></a>

```python
def put_exponential_rollout_rate(
  base_rate_per_minute: typing.Union[int, float] = None,
  increment_factor: typing.Union[int, float] = None,
  rate_increase_criteria: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria = None
) -> None
```

###### `base_rate_per_minute`<sup>Optional</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate.parameter.baseRatePerMinute"></a>

- *Type:* typing.Union[int, float]

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

This parameter allows you to define the initial rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#base_rate_per_minute IotJobTemplate#base_rate_per_minute}

---

###### `increment_factor`<sup>Optional</sup> <a name="increment_factor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate.parameter.incrementFactor"></a>

- *Type:* typing.Union[int, float]

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#increment_factor IotJobTemplate#increment_factor}

---

###### `rate_increase_criteria`<sup>Optional</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate.parameter.rateIncreaseCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

The criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_job_template#rate_increase_criteria IotJobTemplate#rate_increase_criteria}

---

##### `reset_exponential_rollout_rate` <a name="reset_exponential_rollout_rate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate"></a>

```python
def reset_exponential_rollout_rate() -> None
```

##### `reset_maximum_per_minute` <a name="reset_maximum_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```python
def reset_maximum_per_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate">exponential_rollout_rate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput">exponential_rollout_rate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximum_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exponential_rollout_rate`<sup>Required</sup> <a name="exponential_rollout_rate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate"></a>

```python
exponential_rollout_rate: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a>

---

##### `exponential_rollout_rate_input`<sup>Optional</sup> <a name="exponential_rollout_rate_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput"></a>

```python
exponential_rollout_rate_input: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---

##### `maximum_per_minute_input`<sup>Optional</sup> <a name="maximum_per_minute_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```python
maximum_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_per_minute`<sup>Required</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateJobExecutionsRolloutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---


### IotJobTemplateMaintenanceWindowsList <a name="IotJobTemplateMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateMaintenanceWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotJobTemplateMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotJobTemplateMaintenanceWindows]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>]

---


### IotJobTemplateMaintenanceWindowsOutputReference <a name="IotJobTemplateMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateMaintenanceWindows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>

---


### IotJobTemplatePresignedUrlConfigOutputReference <a name="IotJobTemplatePresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec">reset_expires_in_sec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expires_in_sec` <a name="reset_expires_in_sec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```python
def reset_expires_in_sec() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput">expires_in_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec">expires_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_in_sec_input`<sup>Optional</sup> <a name="expires_in_sec_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```python
expires_in_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `expires_in_sec`<sup>Required</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec"></a>

```python
expires_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplatePresignedUrlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---


### IotJobTemplateTagsList <a name="IotJobTemplateTagsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotJobTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotJobTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>]

---


### IotJobTemplateTagsOutputReference <a name="IotJobTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>

---


### IotJobTemplateTimeoutConfigOutputReference <a name="IotJobTemplateTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_job_template

iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">reset_in_progress_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_progress_timeout_in_minutes` <a name="reset_in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```python
def reset_in_progress_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">in_progress_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_progress_timeout_in_minutes_input`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes_input" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```python
in_progress_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_progress_timeout_in_minutes`<sup>Required</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotJobTemplateTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---



