# `emrStep` Submodule <a name="`emrStep` Submodule" id="@cdktn/provider-awscc.emrStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStep <a name="EmrStep" id="@cdktn/provider-awscc.emrStep.EmrStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step awscc_emr_step}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStep(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_on_failure: str,
  hadoop_jar_step: EmrStepHadoopJarStep,
  job_flow_id: str,
  name: str,
  encryption_key_arn: str = None,
  log_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.actionOnFailure">action_on_failure</a></code> | <code>str</code> | This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.hadoopJarStep">hadoop_jar_step</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.jobFlowId">job_flow_id</a></code> | <code>str</code> | A string that uniquely identifies the cluster (job flow). |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the cluster step. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.logUri">log_uri</a></code> | <code>str</code> | The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.actionOnFailure"></a>

- *Type:* str

This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#action_on_failure EmrStep#action_on_failure}

---

##### `hadoop_jar_step`<sup>Required</sup> <a name="hadoop_jar_step" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.hadoopJarStep"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed.

The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#hadoop_jar_step EmrStep#hadoop_jar_step}

---

##### `job_flow_id`<sup>Required</sup> <a name="job_flow_id" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.jobFlowId"></a>

- *Type:* str

A string that uniquely identifies the cluster (job flow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#job_flow_id EmrStep#job_flow_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.name"></a>

- *Type:* str

The name of the cluster step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#name EmrStep#name}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* str

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#encryption_key_arn EmrStep#encryption_key_arn}

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.logUri"></a>

- *Type:* str

The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#log_uri EmrStep#log_uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep">put_hadoop_jar_step</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetEncryptionKeyArn">reset_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetLogUri">reset_log_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStep.EmrStep.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStep.EmrStep.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStep.EmrStep.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.emrStep.EmrStep.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.emrStep.EmrStep.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.emrStep.EmrStep.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.emrStep.EmrStep.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.emrStep.EmrStep.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hadoop_jar_step` <a name="put_hadoop_jar_step" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep"></a>

```python
def put_hadoop_jar_step(
  jar: str,
  args: typing.List[str] = None,
  main_class: str = None,
  step_properties: IResolvable | typing.List[EmrStepHadoopJarStepStepProperties] = None
) -> None
```

###### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep.parameter.jar"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#jar EmrStep#jar}.

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep.parameter.args"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#args EmrStep#args}.

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep.parameter.mainClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#main_class EmrStep#main_class}.

---

###### `step_properties`<sup>Optional</sup> <a name="step_properties" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep.parameter.stepProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#step_properties EmrStep#step_properties}.

---

##### `reset_encryption_key_arn` <a name="reset_encryption_key_arn" id="@cdktn/provider-awscc.emrStep.EmrStep.resetEncryptionKeyArn"></a>

```python
def reset_encryption_key_arn() -> None
```

##### `reset_log_uri` <a name="reset_log_uri" id="@cdktn/provider-awscc.emrStep.EmrStep.resetLogUri"></a>

```python
def reset_log_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EmrStep resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.emrStep.EmrStep.isConstruct"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStep.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStep.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStep.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStep.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EmrStep resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmrStep to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmrStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmrStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStep">hadoop_jar_step</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference">EmrStepHadoopJarStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.stepId">step_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailureInput">action_on_failure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArnInput">encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStepInput">hadoop_jar_step_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowIdInput">job_flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.logUriInput">log_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowId">job_flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStep.EmrStep.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.emrStep.EmrStep.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.emrStep.EmrStep.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStep.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStep.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrStep.EmrStep.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrStep.EmrStep.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStep.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStep.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hadoop_jar_step`<sup>Required</sup> <a name="hadoop_jar_step" id="@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStep"></a>

```python
hadoop_jar_step: EmrStepHadoopJarStepOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference">EmrStepHadoopJarStepOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `step_id`<sup>Required</sup> <a name="step_id" id="@cdktn/provider-awscc.emrStep.EmrStep.property.stepId"></a>

```python
step_id: str
```

- *Type:* str

---

##### `action_on_failure_input`<sup>Optional</sup> <a name="action_on_failure_input" id="@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailureInput"></a>

```python
action_on_failure_input: str
```

- *Type:* str

---

##### `encryption_key_arn_input`<sup>Optional</sup> <a name="encryption_key_arn_input" id="@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArnInput"></a>

```python
encryption_key_arn_input: str
```

- *Type:* str

---

##### `hadoop_jar_step_input`<sup>Optional</sup> <a name="hadoop_jar_step_input" id="@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStepInput"></a>

```python
hadoop_jar_step_input: IResolvable | EmrStepHadoopJarStep
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---

##### `job_flow_id_input`<sup>Optional</sup> <a name="job_flow_id_input" id="@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowIdInput"></a>

```python
job_flow_id_input: str
```

- *Type:* str

---

##### `log_uri_input`<sup>Optional</sup> <a name="log_uri_input" id="@cdktn/provider-awscc.emrStep.EmrStep.property.logUriInput"></a>

```python
log_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.emrStep.EmrStep.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `job_flow_id`<sup>Required</sup> <a name="job_flow_id" id="@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowId"></a>

```python
job_flow_id: str
```

- *Type:* str

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktn/provider-awscc.emrStep.EmrStep.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStep.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStep.EmrStep.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStepConfig <a name="EmrStepConfig" id="@cdktn/provider-awscc.emrStep.EmrStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStepConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_on_failure: str,
  hadoop_jar_step: EmrStepHadoopJarStep,
  job_flow_id: str,
  name: str,
  encryption_key_arn: str = None,
  log_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.hadoopJarStep">hadoop_jar_step</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.jobFlowId">job_flow_id</a></code> | <code>str</code> | A string that uniquely identifies the cluster (job flow). |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.name">name</a></code> | <code>str</code> | The name of the cluster step. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.logUri">log_uri</a></code> | <code>str</code> | The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#action_on_failure EmrStep#action_on_failure}

---

##### `hadoop_jar_step`<sup>Required</sup> <a name="hadoop_jar_step" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.hadoopJarStep"></a>

```python
hadoop_jar_step: EmrStepHadoopJarStep
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed.

The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#hadoop_jar_step EmrStep#hadoop_jar_step}

---

##### `job_flow_id`<sup>Required</sup> <a name="job_flow_id" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.jobFlowId"></a>

```python
job_flow_id: str
```

- *Type:* str

A string that uniquely identifies the cluster (job flow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#job_flow_id EmrStep#job_flow_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the cluster step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#name EmrStep#name}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#encryption_key_arn EmrStep#encryption_key_arn}

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#log_uri EmrStep#log_uri}

---

### EmrStepHadoopJarStep <a name="EmrStepHadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStepHadoopJarStep(
  jar: str,
  args: typing.List[str] = None,
  main_class: str = None,
  step_properties: IResolvable | typing.List[EmrStepHadoopJarStepStepProperties] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.jar">jar</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#jar EmrStep#jar}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#args EmrStep#args}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.mainClass">main_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#main_class EmrStep#main_class}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.stepProperties">step_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#step_properties EmrStep#step_properties}. |

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.jar"></a>

```python
jar: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#jar EmrStep#jar}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#args EmrStep#args}.

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#main_class EmrStep#main_class}.

---

##### `step_properties`<sup>Optional</sup> <a name="step_properties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.stepProperties"></a>

```python
step_properties: IResolvable | typing.List[EmrStepHadoopJarStepStepProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#step_properties EmrStep#step_properties}.

---

### EmrStepHadoopJarStepStepProperties <a name="EmrStepHadoopJarStepStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStepHadoopJarStepStepProperties(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#key EmrStep#key}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#value EmrStep#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#key EmrStep#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#value EmrStep#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStepHadoopJarStepOutputReference <a name="EmrStepHadoopJarStepOutputReference" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStepHadoopJarStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties">put_step_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetStepProperties">reset_step_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_step_properties` <a name="put_step_properties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties"></a>

```python
def put_step_properties(
  value: IResolvable | typing.List[EmrStepHadoopJarStepStepProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_step_properties` <a name="reset_step_properties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetStepProperties"></a>

```python
def reset_step_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepProperties">step_properties</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList">EmrStepHadoopJarStepStepPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jarInput">jar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepPropertiesInput">step_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jar">jar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `step_properties`<sup>Required</sup> <a name="step_properties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepProperties"></a>

```python
step_properties: EmrStepHadoopJarStepStepPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList">EmrStepHadoopJarStepStepPropertiesList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_input`<sup>Optional</sup> <a name="jar_input" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jarInput"></a>

```python
jar_input: str
```

- *Type:* str

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `step_properties_input`<sup>Optional</sup> <a name="step_properties_input" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepPropertiesInput"></a>

```python
step_properties_input: IResolvable | typing.List[EmrStepHadoopJarStepStepProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jar"></a>

```python
jar: str
```

- *Type:* str

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrStepHadoopJarStep
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---


### EmrStepHadoopJarStepStepPropertiesList <a name="EmrStepHadoopJarStepStepPropertiesList" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStepHadoopJarStepStepPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrStepHadoopJarStepStepPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EmrStepHadoopJarStepStepProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>]

---


### EmrStepHadoopJarStepStepPropertiesOutputReference <a name="EmrStepHadoopJarStepStepPropertiesOutputReference" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emr_step

emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrStepHadoopJarStepStepProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>

---



