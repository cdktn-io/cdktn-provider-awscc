# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktn/provider-awscc.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktn/provider-awscc.glueJob.GlueJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job awscc_glue_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command: GlueJobCommand,
  role: str,
  allocated_capacity: typing.Union[int, float] = None,
  connections: GlueJobConnections = None,
  default_arguments: str = None,
  description: str = None,
  execution_class: str = None,
  execution_property: GlueJobExecutionProperty = None,
  glue_version: str = None,
  job_mode: str = None,
  job_run_queuing_enabled: bool | IResolvable = None,
  log_uri: str = None,
  maintenance_window: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  name: str = None,
  non_overridable_arguments: str = None,
  notification_property: GlueJobNotificationProperty = None,
  number_of_workers: typing.Union[int, float] = None,
  security_configuration: str = None,
  tags: str = None,
  timeout: typing.Union[int, float] = None,
  worker_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.role">role</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.allocatedCapacity">allocated_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.defaultArguments">default_arguments</a></code> | <code>str</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionClass">execution_class</a></code> | <code>str</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionProperty">execution_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.glueVersion">glue_version</a></code> | <code>str</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobMode">job_mode</a></code> | <code>str</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobRunQueuingEnabled">job_run_queuing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.logUri">log_uri</a></code> | <code>str</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.name">name</a></code> | <code>str</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments">non_overridable_arguments</a></code> | <code>str</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.notificationProperty">notification_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.securityConfiguration">security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.tags">tags</a></code> | <code>str</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.workerType">worker_type</a></code> | <code>str</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.command"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#command GlueJob#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.role"></a>

- *Type:* str

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#role GlueJob#role}

---

##### `allocated_capacity`<sup>Optional</sup> <a name="allocated_capacity" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.allocatedCapacity"></a>

- *Type:* typing.Union[int, float]

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `default_arguments`<sup>Optional</sup> <a name="default_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.defaultArguments"></a>

- *Type:* str

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.description"></a>

- *Type:* str

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#description GlueJob#description}

---

##### `execution_class`<sup>Optional</sup> <a name="execution_class" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionClass"></a>

- *Type:* str

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `execution_property`<sup>Optional</sup> <a name="execution_property" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.executionProperty"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.glueVersion"></a>

- *Type:* str

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `job_mode`<sup>Optional</sup> <a name="job_mode" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobMode"></a>

- *Type:* str

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `job_run_queuing_enabled`<sup>Optional</sup> <a name="job_run_queuing_enabled" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.jobRunQueuingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.logUri"></a>

- *Type:* str

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maintenanceWindow"></a>

- *Type:* str

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.name"></a>

- *Type:* str

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

##### `non_overridable_arguments`<sup>Optional</sup> <a name="non_overridable_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.nonOverridableArguments"></a>

- *Type:* str

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `notification_property`<sup>Optional</sup> <a name="notification_property" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.notificationProperty"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.securityConfiguration"></a>

- *Type:* str

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.tags"></a>

- *Type:* str

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.workerType"></a>

- *Type:* str

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putCommand">put_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty">put_execution_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty">put_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity">reset_allocated_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetConnections">reset_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments">reset_default_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass">reset_execution_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty">reset_execution_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion">reset_glue_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode">reset_job_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled">reset_job_run_queuing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri">reset_log_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments">reset_non_overridable_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty">reset_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueJob.GlueJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueJob.GlueJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueJob.GlueJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueJob.GlueJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_command` <a name="put_command" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand"></a>

```python
def put_command(
  name: str = None,
  python_version: str = None,
  runtime: str = None,
  script_location: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.name"></a>

- *Type:* str

The name of the job command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.pythonVersion"></a>

- *Type:* str

The Python version being used to execute a Python shell job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#python_version GlueJob#python_version}

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.runtime"></a>

- *Type:* str

Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#runtime GlueJob#runtime}

---

###### `script_location`<sup>Optional</sup> <a name="script_location" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.scriptLocation"></a>

- *Type:* str

Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#script_location GlueJob#script_location}

---

##### `put_connections` <a name="put_connections" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections"></a>

```python
def put_connections(
  connections: typing.List[str] = None
) -> None
```

###### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections.parameter.connections"></a>

- *Type:* typing.List[str]

A list of connections used by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `put_execution_property` <a name="put_execution_property" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty"></a>

```python
def put_execution_property(
  max_concurrent_runs: typing.Union[int, float] = None
) -> None
```

###### `max_concurrent_runs`<sup>Optional</sup> <a name="max_concurrent_runs" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty.parameter.maxConcurrentRuns"></a>

- *Type:* typing.Union[int, float]

The maximum number of concurrent runs allowed for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}

---

##### `put_notification_property` <a name="put_notification_property" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty"></a>

```python
def put_notification_property(
  notify_delay_after: typing.Union[int, float] = None
) -> None
```

###### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty.parameter.notifyDelayAfter"></a>

- *Type:* typing.Union[int, float]

It is the number of minutes to wait before sending a job run delay notification after a job run starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}

---

##### `reset_allocated_capacity` <a name="reset_allocated_capacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity"></a>

```python
def reset_allocated_capacity() -> None
```

##### `reset_connections` <a name="reset_connections" id="@cdktn/provider-awscc.glueJob.GlueJob.resetConnections"></a>

```python
def reset_connections() -> None
```

##### `reset_default_arguments` <a name="reset_default_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments"></a>

```python
def reset_default_arguments() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_class` <a name="reset_execution_class" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass"></a>

```python
def reset_execution_class() -> None
```

##### `reset_execution_property` <a name="reset_execution_property" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty"></a>

```python
def reset_execution_property() -> None
```

##### `reset_glue_version` <a name="reset_glue_version" id="@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion"></a>

```python
def reset_glue_version() -> None
```

##### `reset_job_mode` <a name="reset_job_mode" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode"></a>

```python
def reset_job_mode() -> None
```

##### `reset_job_run_queuing_enabled` <a name="reset_job_run_queuing_enabled" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled"></a>

```python
def reset_job_run_queuing_enabled() -> None
```

##### `reset_log_uri` <a name="reset_log_uri" id="@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri"></a>

```python
def reset_log_uri() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueJob.GlueJob.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_non_overridable_arguments` <a name="reset_non_overridable_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments"></a>

```python
def reset_non_overridable_arguments() -> None
```

##### `reset_notification_property` <a name="reset_notification_property" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty"></a>

```python
def reset_notification_property() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty">execution_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput">allocated_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput">command_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput">connections_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput">default_arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput">execution_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput">execution_property_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput">glue_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput">job_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput">job_run_queuing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput">log_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput">non_overridable_arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput">notification_property_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity">allocated_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments">default_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass">execution_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode">job_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled">job_run_queuing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments">non_overridable_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueJob.GlueJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueJob.GlueJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJob.property.command"></a>

```python
command: GlueJobCommandOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connections"></a>

```python
connections: GlueJobConnectionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a>

---

##### `execution_property`<sup>Required</sup> <a name="execution_property" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty"></a>

```python
execution_property: GlueJobExecutionPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_property`<sup>Required</sup> <a name="notification_property" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty"></a>

```python
notification_property: GlueJobNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `allocated_capacity_input`<sup>Optional</sup> <a name="allocated_capacity_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput"></a>

```python
allocated_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput"></a>

```python
command_input: IResolvable | GlueJobCommand
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput"></a>

```python
connections_input: IResolvable | GlueJobConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `default_arguments_input`<sup>Optional</sup> <a name="default_arguments_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```python
default_arguments_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_class_input`<sup>Optional</sup> <a name="execution_class_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput"></a>

```python
execution_class_input: str
```

- *Type:* str

---

##### `execution_property_input`<sup>Optional</sup> <a name="execution_property_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput"></a>

```python
execution_property_input: IResolvable | GlueJobExecutionProperty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `glue_version_input`<sup>Optional</sup> <a name="glue_version_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput"></a>

```python
glue_version_input: str
```

- *Type:* str

---

##### `job_mode_input`<sup>Optional</sup> <a name="job_mode_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput"></a>

```python
job_mode_input: str
```

- *Type:* str

---

##### `job_run_queuing_enabled_input`<sup>Optional</sup> <a name="job_run_queuing_enabled_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput"></a>

```python
job_run_queuing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_uri_input`<sup>Optional</sup> <a name="log_uri_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput"></a>

```python
log_uri_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_overridable_arguments_input`<sup>Optional</sup> <a name="non_overridable_arguments_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```python
non_overridable_arguments_input: str
```

- *Type:* str

---

##### `notification_property_input`<sup>Optional</sup> <a name="notification_property_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput"></a>

```python
notification_property_input: IResolvable | GlueJobNotificationProperty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `allocated_capacity`<sup>Required</sup> <a name="allocated_capacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity"></a>

```python
allocated_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_arguments`<sup>Required</sup> <a name="default_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments"></a>

```python
default_arguments: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_class`<sup>Required</sup> <a name="execution_class" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass"></a>

```python
execution_class: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `job_mode`<sup>Required</sup> <a name="job_mode" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode"></a>

```python
job_mode: str
```

- *Type:* str

---

##### `job_run_queuing_enabled`<sup>Required</sup> <a name="job_run_queuing_enabled" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled"></a>

```python
job_run_queuing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `non_overridable_arguments`<sup>Required</sup> <a name="non_overridable_arguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments"></a>

```python
non_overridable_arguments: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJob.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktn/provider-awscc.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobCommand(
  name: str = None,
  python_version: str = None,
  runtime: str = None,
  script_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name">name</a></code> | <code>str</code> | The name of the job command. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion">python_version</a></code> | <code>str</code> | The Python version being used to execute a Python shell job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime">runtime</a></code> | <code>str</code> | Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation">script_location</a></code> | <code>str</code> | Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the job command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

The Python version being used to execute a Python shell job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#python_version GlueJob#python_version}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#runtime GlueJob#runtime}

---

##### `script_location`<sup>Optional</sup> <a name="script_location" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#script_location GlueJob#script_location}

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktn/provider-awscc.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command: GlueJobCommand,
  role: str,
  allocated_capacity: typing.Union[int, float] = None,
  connections: GlueJobConnections = None,
  default_arguments: str = None,
  description: str = None,
  execution_class: str = None,
  execution_property: GlueJobExecutionProperty = None,
  glue_version: str = None,
  job_mode: str = None,
  job_run_queuing_enabled: bool | IResolvable = None,
  log_uri: str = None,
  maintenance_window: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  name: str = None,
  non_overridable_arguments: str = None,
  notification_property: GlueJobNotificationProperty = None,
  number_of_workers: typing.Union[int, float] = None,
  security_configuration: str = None,
  tags: str = None,
  timeout: typing.Union[int, float] = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role">role</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity">allocated_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments">default_arguments</a></code> | <code>str</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description">description</a></code> | <code>str</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass">execution_class</a></code> | <code>str</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty">execution_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion">glue_version</a></code> | <code>str</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode">job_mode</a></code> | <code>str</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled">job_run_queuing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri">log_uri</a></code> | <code>str</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name">name</a></code> | <code>str</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments">non_overridable_arguments</a></code> | <code>str</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags">tags</a></code> | <code>str</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType">worker_type</a></code> | <code>str</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command"></a>

```python
command: GlueJobCommand
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#command GlueJob#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#role GlueJob#role}

---

##### `allocated_capacity`<sup>Optional</sup> <a name="allocated_capacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity"></a>

```python
allocated_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections"></a>

```python
connections: GlueJobConnections
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `default_arguments`<sup>Optional</sup> <a name="default_arguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments"></a>

```python
default_arguments: str
```

- *Type:* str

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#description GlueJob#description}

---

##### `execution_class`<sup>Optional</sup> <a name="execution_class" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass"></a>

```python
execution_class: str
```

- *Type:* str

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `execution_property`<sup>Optional</sup> <a name="execution_property" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty"></a>

```python
execution_property: GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `job_mode`<sup>Optional</sup> <a name="job_mode" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode"></a>

```python
job_mode: str
```

- *Type:* str

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `job_run_queuing_enabled`<sup>Optional</sup> <a name="job_run_queuing_enabled" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled"></a>

```python
job_run_queuing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#name GlueJob#name}

---

##### `non_overridable_arguments`<sup>Optional</sup> <a name="non_overridable_arguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```python
non_overridable_arguments: str
```

- *Type:* str

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `notification_property`<sup>Optional</sup> <a name="notification_property" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty"></a>

```python
notification_property: GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

### GlueJobConnections <a name="GlueJobConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobConnections(
  connections: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections">connections</a></code> | <code>typing.List[str]</code> | A list of connections used by the job. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

A list of connections used by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#connections GlueJob#connections}

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobExecutionProperty(
  max_concurrent_runs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">max_concurrent_runs</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent runs allowed for the job. |

---

##### `max_concurrent_runs`<sup>Optional</sup> <a name="max_concurrent_runs" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```python
max_concurrent_runs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of concurrent runs allowed for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobNotificationProperty(
  notify_delay_after: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | It is the number of minutes to wait before sending a job run delay notification after a job run starts. |

---

##### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

It is the number of minutes to wait before sending a job run delay notification after a job run starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobCommandOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation">reset_script_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_script_location` <a name="reset_script_location" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation"></a>

```python
def reset_script_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">script_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation">script_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `script_location_input`<sup>Optional</sup> <a name="script_location_input" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```python
script_location_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `script_location`<sup>Required</sup> <a name="script_location" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueJobCommand
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobConnectionsOutputReference <a name="GlueJobConnectionsOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections">reset_connections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connections` <a name="reset_connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections"></a>

```python
def reset_connections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput">connections_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections">connections</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput"></a>

```python
connections_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueJobConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobExecutionPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">reset_max_concurrent_runs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_runs` <a name="reset_max_concurrent_runs" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```python
def reset_max_concurrent_runs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">max_concurrent_runs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">max_concurrent_runs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrent_runs_input`<sup>Optional</sup> <a name="max_concurrent_runs_input" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```python
max_concurrent_runs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_runs`<sup>Required</sup> <a name="max_concurrent_runs" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```python
max_concurrent_runs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueJobExecutionProperty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_job

glueJob.GlueJobNotificationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">reset_notify_delay_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notify_delay_after` <a name="reset_notify_delay_after" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```python
def reset_notify_delay_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">notify_delay_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notify_delay_after_input`<sup>Optional</sup> <a name="notify_delay_after_input" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```python
notify_delay_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_delay_after`<sup>Required</sup> <a name="notify_delay_after" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueJobNotificationProperty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---



