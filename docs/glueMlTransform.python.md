# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktn/provider-awscc.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransform(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  input_record_tables: GlueMlTransformInputRecordTables,
  role: str,
  transform_parameters: GlueMlTransformTransformParameters,
  description: str = None,
  glue_version: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  name: str = None,
  number_of_workers: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  transform_encryption: GlueMlTransformTransformEncryption = None,
  worker_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.inputRecordTables">input_record_tables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.role">role</a></code> | <code>str</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformParameters">transform_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.glueVersion">glue_version</a></code> | <code>str</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformEncryption">transform_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.workerType">worker_type</a></code> | <code>str</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input_record_tables`<sup>Required</sup> <a name="input_record_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.inputRecordTables"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.role"></a>

- *Type:* str

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `transform_parameters`<sup>Required</sup> <a name="transform_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.description"></a>

- *Type:* str

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.glueVersion"></a>

- *Type:* str

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `transform_encryption`<sup>Optional</sup> <a name="transform_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformEncryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.workerType"></a>

- *Type:* str

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables">put_input_record_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption">put_transform_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters">put_transform_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion">reset_glue_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption">reset_transform_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_record_tables` <a name="put_input_record_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```python
def put_input_record_tables(
  glue_tables: IResolvable | typing.List[GlueMlTransformInputRecordTablesGlueTables] = None
) -> None
```

###### `glue_tables`<sup>Optional</sup> <a name="glue_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.glueTables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]

The database and table in the AWS Glue Data Catalog that is used for input or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#glue_tables GlueMlTransform#glue_tables}

---

##### `put_transform_encryption` <a name="put_transform_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption"></a>

```python
def put_transform_encryption(
  ml_user_data_encryption: GlueMlTransformTransformEncryptionMlUserDataEncryption = None,
  task_run_security_configuration_name: str = None
) -> None
```

###### `ml_user_data_encryption`<sup>Optional</sup> <a name="ml_user_data_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption.parameter.mlUserDataEncryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

The encryption-at-rest settings of the transform that apply to accessing user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#ml_user_data_encryption GlueMlTransform#ml_user_data_encryption}

---

###### `task_run_security_configuration_name`<sup>Optional</sup> <a name="task_run_security_configuration_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption.parameter.taskRunSecurityConfigurationName"></a>

- *Type:* str

The name of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#task_run_security_configuration_name GlueMlTransform#task_run_security_configuration_name}

---

##### `put_transform_parameters` <a name="put_transform_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters"></a>

```python
def put_transform_parameters(
  transform_type: str,
  find_matches_parameters: GlueMlTransformTransformParametersFindMatchesParameters = None
) -> None
```

###### `transform_type`<sup>Required</sup> <a name="transform_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters.parameter.transformType"></a>

- *Type:* str

The type of machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}

---

###### `find_matches_parameters`<sup>Optional</sup> <a name="find_matches_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters.parameter.findMatchesParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

The parameters to configure the find matches transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_glue_version` <a name="reset_glue_version" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```python
def reset_glue_version() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_transform_encryption` <a name="reset_transform_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption"></a>

```python
def reset_transform_encryption() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransform.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransform.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransform.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransform.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueMlTransform to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables">input_record_tables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption">transform_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId">transform_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters">transform_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput">glue_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">input_record_tables_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput">transform_encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput">transform_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_record_tables`<sup>Required</sup> <a name="input_record_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```python
input_record_tables: GlueMlTransformInputRecordTablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a>

---

##### `transform_encryption`<sup>Required</sup> <a name="transform_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption"></a>

```python
transform_encryption: GlueMlTransformTransformEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a>

---

##### `transform_id`<sup>Required</sup> <a name="transform_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId"></a>

```python
transform_id: str
```

- *Type:* str

---

##### `transform_parameters`<sup>Required</sup> <a name="transform_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters"></a>

```python
transform_parameters: GlueMlTransformTransformParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `glue_version_input`<sup>Optional</sup> <a name="glue_version_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```python
glue_version_input: str
```

- *Type:* str

---

##### `input_record_tables_input`<sup>Optional</sup> <a name="input_record_tables_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```python
input_record_tables_input: IResolvable | GlueMlTransformInputRecordTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_encryption_input`<sup>Optional</sup> <a name="transform_encryption_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput"></a>

```python
transform_encryption_input: IResolvable | GlueMlTransformTransformEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `transform_parameters_input`<sup>Optional</sup> <a name="transform_parameters_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput"></a>

```python
transform_parameters_input: IResolvable | GlueMlTransformTransformParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  input_record_tables: GlueMlTransformInputRecordTables,
  role: str,
  transform_parameters: GlueMlTransformTransformParameters,
  description: str = None,
  glue_version: str = None,
  max_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  name: str = None,
  number_of_workers: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  transform_encryption: GlueMlTransformTransformEncryption = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">input_record_tables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role">role</a></code> | <code>str</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters">transform_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description">description</a></code> | <code>str</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion">glue_version</a></code> | <code>str</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name">name</a></code> | <code>str</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption">transform_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType">worker_type</a></code> | <code>str</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input_record_tables`<sup>Required</sup> <a name="input_record_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```python
input_record_tables: GlueMlTransformInputRecordTables
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `transform_parameters`<sup>Required</sup> <a name="transform_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters"></a>

```python
transform_parameters: GlueMlTransformTransformParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `transform_encryption`<sup>Optional</sup> <a name="transform_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption"></a>

```python
transform_encryption: GlueMlTransformTransformEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformInputRecordTables(
  glue_tables: IResolvable | typing.List[GlueMlTransformInputRecordTablesGlueTables] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables">glue_tables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]</code> | The database and table in the AWS Glue Data Catalog that is used for input or output data. |

---

##### `glue_tables`<sup>Optional</sup> <a name="glue_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables"></a>

```python
glue_tables: IResolvable | typing.List[GlueMlTransformInputRecordTablesGlueTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]

The database and table in the AWS Glue Data Catalog that is used for input or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#glue_tables GlueMlTransform#glue_tables}

---

### GlueMlTransformInputRecordTablesGlueTables <a name="GlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformInputRecordTablesGlueTables(
  catalog_id: str = None,
  connection_name: str = None,
  database_name: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId">catalog_id</a></code> | <code>str</code> | A unique identifier for the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName">database_name</a></code> | <code>str</code> | A database name in the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName">table_name</a></code> | <code>str</code> | A table name in the AWS Glue Data Catalog. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

A unique identifier for the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

A database name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

A table name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}

---

### GlueMlTransformTransformEncryption <a name="GlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformEncryption(
  ml_user_data_encryption: GlueMlTransformTransformEncryptionMlUserDataEncryption = None,
  task_run_security_configuration_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption">ml_user_data_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | The encryption-at-rest settings of the transform that apply to accessing user data. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName">task_run_security_configuration_name</a></code> | <code>str</code> | The name of the security configuration. |

---

##### `ml_user_data_encryption`<sup>Optional</sup> <a name="ml_user_data_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption"></a>

```python
ml_user_data_encryption: GlueMlTransformTransformEncryptionMlUserDataEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

The encryption-at-rest settings of the transform that apply to accessing user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#ml_user_data_encryption GlueMlTransform#ml_user_data_encryption}

---

##### `task_run_security_configuration_name`<sup>Optional</sup> <a name="task_run_security_configuration_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName"></a>

```python
task_run_security_configuration_name: str
```

- *Type:* str

The name of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#task_run_security_configuration_name GlueMlTransform#task_run_security_configuration_name}

---

### GlueMlTransformTransformEncryptionMlUserDataEncryption <a name="GlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption(
  kms_key_id: str = None,
  ml_user_data_encryption_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID for the customer-provided KMS key. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode">ml_user_data_encryption_mode</a></code> | <code>str</code> | The encryption mode applied to user data. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID for the customer-provided KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#kms_key_id GlueMlTransform#kms_key_id}

---

##### `ml_user_data_encryption_mode`<sup>Optional</sup> <a name="ml_user_data_encryption_mode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

```python
ml_user_data_encryption_mode: str
```

- *Type:* str

The encryption mode applied to user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode GlueMlTransform#ml_user_data_encryption_mode}

---

### GlueMlTransformTransformParameters <a name="GlueMlTransformTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformParameters(
  transform_type: str,
  find_matches_parameters: GlueMlTransformTransformParametersFindMatchesParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType">transform_type</a></code> | <code>str</code> | The type of machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters">find_matches_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | The parameters to configure the find matches transform. |

---

##### `transform_type`<sup>Required</sup> <a name="transform_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType"></a>

```python
transform_type: str
```

- *Type:* str

The type of machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}

---

##### `find_matches_parameters`<sup>Optional</sup> <a name="find_matches_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters"></a>

```python
find_matches_parameters: GlueMlTransformTransformParametersFindMatchesParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

The parameters to configure the find matches transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

### GlueMlTransformTransformParametersFindMatchesParameters <a name="GlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters(
  accuracy_cost_tradeoff: typing.Union[int, float] = None,
  enforce_provided_labels: bool | IResolvable = None,
  precision_recall_tradeoff: typing.Union[int, float] = None,
  primary_key_column_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff">accuracy_cost_tradeoff</a></code> | <code>typing.Union[int, float]</code> | The value for accuracy and cost tradeoff. A value of 0.5 means balance. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels">enforce_provided_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, forces the output to match the provided labels. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff">precision_recall_tradeoff</a></code> | <code>typing.Union[int, float]</code> | The value for precision and recall tradeoff. A value of 0.5 means no preference. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName">primary_key_column_name</a></code> | <code>str</code> | The name of a column that uniquely identifies rows in the source table. |

---

##### `accuracy_cost_tradeoff`<sup>Optional</sup> <a name="accuracy_cost_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff"></a>

```python
accuracy_cost_tradeoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value for accuracy and cost tradeoff. A value of 0.5 means balance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff GlueMlTransform#accuracy_cost_tradeoff}

---

##### `enforce_provided_labels`<sup>Optional</sup> <a name="enforce_provided_labels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```python
enforce_provided_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, forces the output to match the provided labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}

---

##### `precision_recall_tradeoff`<sup>Optional</sup> <a name="precision_recall_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff"></a>

```python
precision_recall_tradeoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value for precision and recall tradeoff. A value of 0.5 means no preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#precision_recall_tradeoff GlueMlTransform#precision_recall_tradeoff}

---

##### `primary_key_column_name`<sup>Optional</sup> <a name="primary_key_column_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```python
primary_key_column_name: str
```

- *Type:* str

The name of a column that uniquely identifies rows in the source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesGlueTablesList <a name="GlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueMlTransformInputRecordTablesGlueTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueMlTransformInputRecordTablesGlueTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]

---


### GlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="GlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueMlTransformInputRecordTablesGlueTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformInputRecordTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables">put_glue_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables">reset_glue_tables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_glue_tables` <a name="put_glue_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables"></a>

```python
def put_glue_tables(
  value: IResolvable | typing.List[GlueMlTransformInputRecordTablesGlueTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]

---

##### `reset_glue_tables` <a name="reset_glue_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables"></a>

```python
def reset_glue_tables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables">glue_tables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput">glue_tables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_tables`<sup>Required</sup> <a name="glue_tables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```python
glue_tables: GlueMlTransformInputRecordTablesGlueTablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `glue_tables_input`<sup>Optional</sup> <a name="glue_tables_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput"></a>

```python
glue_tables_input: IResolvable | typing.List[GlueMlTransformInputRecordTablesGlueTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueMlTransformInputRecordTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---


### GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode">reset_ml_user_data_encryption_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_ml_user_data_encryption_mode` <a name="reset_ml_user_data_encryption_mode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode"></a>

```python
def reset_ml_user_data_encryption_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput">ml_user_data_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">ml_user_data_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `ml_user_data_encryption_mode_input`<sup>Optional</sup> <a name="ml_user_data_encryption_mode_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput"></a>

```python
ml_user_data_encryption_mode_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `ml_user_data_encryption_mode`<sup>Required</sup> <a name="ml_user_data_encryption_mode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```python
ml_user_data_encryption_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueMlTransformTransformEncryptionMlUserDataEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---


### GlueMlTransformTransformEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption">put_ml_user_data_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption">reset_ml_user_data_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName">reset_task_run_security_configuration_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ml_user_data_encryption` <a name="put_ml_user_data_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption"></a>

```python
def put_ml_user_data_encryption(
  kms_key_id: str = None,
  ml_user_data_encryption_mode: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption.parameter.kmsKeyId"></a>

- *Type:* str

The ID for the customer-provided KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#kms_key_id GlueMlTransform#kms_key_id}

---

###### `ml_user_data_encryption_mode`<sup>Optional</sup> <a name="ml_user_data_encryption_mode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption.parameter.mlUserDataEncryptionMode"></a>

- *Type:* str

The encryption mode applied to user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode GlueMlTransform#ml_user_data_encryption_mode}

---

##### `reset_ml_user_data_encryption` <a name="reset_ml_user_data_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption"></a>

```python
def reset_ml_user_data_encryption() -> None
```

##### `reset_task_run_security_configuration_name` <a name="reset_task_run_security_configuration_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName"></a>

```python
def reset_task_run_security_configuration_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">ml_user_data_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput">ml_user_data_encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput">task_run_security_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">task_run_security_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ml_user_data_encryption`<sup>Required</sup> <a name="ml_user_data_encryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```python
ml_user_data_encryption: GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `ml_user_data_encryption_input`<sup>Optional</sup> <a name="ml_user_data_encryption_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput"></a>

```python
ml_user_data_encryption_input: IResolvable | GlueMlTransformTransformEncryptionMlUserDataEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `task_run_security_configuration_name_input`<sup>Optional</sup> <a name="task_run_security_configuration_name_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput"></a>

```python
task_run_security_configuration_name_input: str
```

- *Type:* str

---

##### `task_run_security_configuration_name`<sup>Required</sup> <a name="task_run_security_configuration_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```python
task_run_security_configuration_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueMlTransformTransformEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---


### GlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff">reset_accuracy_cost_tradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">reset_enforce_provided_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff">reset_precision_recall_tradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">reset_primary_key_column_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accuracy_cost_tradeoff` <a name="reset_accuracy_cost_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff"></a>

```python
def reset_accuracy_cost_tradeoff() -> None
```

##### `reset_enforce_provided_labels` <a name="reset_enforce_provided_labels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```python
def reset_enforce_provided_labels() -> None
```

##### `reset_precision_recall_tradeoff` <a name="reset_precision_recall_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff"></a>

```python
def reset_precision_recall_tradeoff() -> None
```

##### `reset_primary_key_column_name` <a name="reset_primary_key_column_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```python
def reset_primary_key_column_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput">accuracy_cost_tradeoff_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">enforce_provided_labels_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput">precision_recall_tradeoff_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">primary_key_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">accuracy_cost_tradeoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforce_provided_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">precision_recall_tradeoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primary_key_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accuracy_cost_tradeoff_input`<sup>Optional</sup> <a name="accuracy_cost_tradeoff_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput"></a>

```python
accuracy_cost_tradeoff_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_provided_labels_input`<sup>Optional</sup> <a name="enforce_provided_labels_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```python
enforce_provided_labels_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `precision_recall_tradeoff_input`<sup>Optional</sup> <a name="precision_recall_tradeoff_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput"></a>

```python
precision_recall_tradeoff_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_key_column_name_input`<sup>Optional</sup> <a name="primary_key_column_name_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```python
primary_key_column_name_input: str
```

- *Type:* str

---

##### `accuracy_cost_tradeoff`<sup>Required</sup> <a name="accuracy_cost_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```python
accuracy_cost_tradeoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_provided_labels`<sup>Required</sup> <a name="enforce_provided_labels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```python
enforce_provided_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `precision_recall_tradeoff`<sup>Required</sup> <a name="precision_recall_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```python
precision_recall_tradeoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_key_column_name`<sup>Required</sup> <a name="primary_key_column_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```python
primary_key_column_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueMlTransformTransformParametersFindMatchesParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformTransformParametersOutputReference <a name="GlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_ml_transform

glueMlTransform.GlueMlTransformTransformParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters">put_find_matches_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters">reset_find_matches_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_find_matches_parameters` <a name="put_find_matches_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters"></a>

```python
def put_find_matches_parameters(
  accuracy_cost_tradeoff: typing.Union[int, float] = None,
  enforce_provided_labels: bool | IResolvable = None,
  precision_recall_tradeoff: typing.Union[int, float] = None,
  primary_key_column_name: str = None
) -> None
```

###### `accuracy_cost_tradeoff`<sup>Optional</sup> <a name="accuracy_cost_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.accuracyCostTradeoff"></a>

- *Type:* typing.Union[int, float]

The value for accuracy and cost tradeoff. A value of 0.5 means balance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff GlueMlTransform#accuracy_cost_tradeoff}

---

###### `enforce_provided_labels`<sup>Optional</sup> <a name="enforce_provided_labels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.enforceProvidedLabels"></a>

- *Type:* bool | cdktn.IResolvable

If true, forces the output to match the provided labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}

---

###### `precision_recall_tradeoff`<sup>Optional</sup> <a name="precision_recall_tradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.precisionRecallTradeoff"></a>

- *Type:* typing.Union[int, float]

The value for precision and recall tradeoff. A value of 0.5 means no preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#precision_recall_tradeoff GlueMlTransform#precision_recall_tradeoff}

---

###### `primary_key_column_name`<sup>Optional</sup> <a name="primary_key_column_name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.primaryKeyColumnName"></a>

- *Type:* str

The name of a column that uniquely identifies rows in the source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}

---

##### `reset_find_matches_parameters` <a name="reset_find_matches_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters"></a>

```python
def reset_find_matches_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">find_matches_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput">find_matches_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput">transform_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType">transform_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `find_matches_parameters`<sup>Required</sup> <a name="find_matches_parameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```python
find_matches_parameters: GlueMlTransformTransformParametersFindMatchesParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `find_matches_parameters_input`<sup>Optional</sup> <a name="find_matches_parameters_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```python
find_matches_parameters_input: IResolvable | GlueMlTransformTransformParametersFindMatchesParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `transform_type_input`<sup>Optional</sup> <a name="transform_type_input" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput"></a>

```python
transform_type_input: str
```

- *Type:* str

---

##### `transform_type`<sup>Required</sup> <a name="transform_type" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```python
transform_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueMlTransformTransformParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---



