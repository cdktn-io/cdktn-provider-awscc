# `logsLogAnomalyDetector` Submodule <a name="`logsLogAnomalyDetector` Submodule" id="@cdktn/provider-awscc.logsLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsLogAnomalyDetector <a name="LogsLogAnomalyDetector" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import logs_log_anomaly_detector

logsLogAnomalyDetector.LogsLogAnomalyDetector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  anomaly_visibility_time: typing.Union[int, float] = None,
  detector_name: str = None,
  evaluation_frequency: str = None,
  filter_pattern: str = None,
  kms_key_id: str = None,
  log_group_arn_list: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.anomalyVisibilityTime">anomaly_visibility_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.detectorName">detector_name</a></code> | <code>str</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.evaluationFrequency">evaluation_frequency</a></code> | <code>str</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.filterPattern">filter_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.logGroupArnList">log_group_arn_list</a></code> | <code>typing.List[str]</code> | List of Arns for the given log group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.accountId"></a>

- *Type:* str

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `anomaly_visibility_time`<sup>Optional</sup> <a name="anomaly_visibility_time" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.anomalyVisibilityTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detector_name`<sup>Optional</sup> <a name="detector_name" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.detectorName"></a>

- *Type:* str

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `evaluation_frequency`<sup>Optional</sup> <a name="evaluation_frequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.evaluationFrequency"></a>

- *Type:* str

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `filter_pattern`<sup>Optional</sup> <a name="filter_pattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.filterPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `log_group_arn_list`<sup>Optional</sup> <a name="log_group_arn_list" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.logGroupArnList"></a>

- *Type:* typing.List[str]

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime">reset_anomaly_visibility_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName">reset_detector_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency">reset_evaluation_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern">reset_filter_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList">reset_log_group_arn_list</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_anomaly_visibility_time` <a name="reset_anomaly_visibility_time" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```python
def reset_anomaly_visibility_time() -> None
```

##### `reset_detector_name` <a name="reset_detector_name" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName"></a>

```python
def reset_detector_name() -> None
```

##### `reset_evaluation_frequency` <a name="reset_evaluation_frequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency"></a>

```python
def reset_evaluation_frequency() -> None
```

##### `reset_filter_pattern` <a name="reset_filter_pattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern"></a>

```python
def reset_filter_pattern() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_log_group_arn_list` <a name="reset_log_group_arn_list" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList"></a>

```python
def reset_log_group_arn_list() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct"></a>

```python
from cdktn_provider_awscc import logs_log_anomaly_detector

logsLogAnomalyDetector.LogsLogAnomalyDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import logs_log_anomaly_detector

logsLogAnomalyDetector.LogsLogAnomalyDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import logs_log_anomaly_detector

logsLogAnomalyDetector.LogsLogAnomalyDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import logs_log_anomaly_detector

logsLogAnomalyDetector.LogsLogAnomalyDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsLogAnomalyDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn">anomaly_detector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus">anomaly_detector_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp">creation_time_stamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp">last_modified_time_stamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput">anomaly_visibility_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput">detector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput">evaluation_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput">filter_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput">log_group_arn_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime">anomaly_visibility_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName">detector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency">evaluation_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern">filter_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList">log_group_arn_list</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anomaly_detector_arn`<sup>Required</sup> <a name="anomaly_detector_arn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn"></a>

```python
anomaly_detector_arn: str
```

- *Type:* str

---

##### `anomaly_detector_status`<sup>Required</sup> <a name="anomaly_detector_status" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus"></a>

```python
anomaly_detector_status: str
```

- *Type:* str

---

##### `creation_time_stamp`<sup>Required</sup> <a name="creation_time_stamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp"></a>

```python
creation_time_stamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time_stamp`<sup>Required</sup> <a name="last_modified_time_stamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp"></a>

```python
last_modified_time_stamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `anomaly_visibility_time_input`<sup>Optional</sup> <a name="anomaly_visibility_time_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```python
anomaly_visibility_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detector_name_input`<sup>Optional</sup> <a name="detector_name_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput"></a>

```python
detector_name_input: str
```

- *Type:* str

---

##### `evaluation_frequency_input`<sup>Optional</sup> <a name="evaluation_frequency_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```python
evaluation_frequency_input: str
```

- *Type:* str

---

##### `filter_pattern_input`<sup>Optional</sup> <a name="filter_pattern_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput"></a>

```python
filter_pattern_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `log_group_arn_list_input`<sup>Optional</sup> <a name="log_group_arn_list_input" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput"></a>

```python
log_group_arn_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `anomaly_visibility_time`<sup>Required</sup> <a name="anomaly_visibility_time" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```python
anomaly_visibility_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detector_name`<sup>Required</sup> <a name="detector_name" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName"></a>

```python
detector_name: str
```

- *Type:* str

---

##### `evaluation_frequency`<sup>Required</sup> <a name="evaluation_frequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency"></a>

```python
evaluation_frequency: str
```

- *Type:* str

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern"></a>

```python
filter_pattern: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `log_group_arn_list`<sup>Required</sup> <a name="log_group_arn_list" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList"></a>

```python
log_group_arn_list: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsLogAnomalyDetectorConfig <a name="LogsLogAnomalyDetectorConfig" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import logs_log_anomaly_detector

logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  anomaly_visibility_time: typing.Union[int, float] = None,
  detector_name: str = None,
  evaluation_frequency: str = None,
  filter_pattern: str = None,
  kms_key_id: str = None,
  log_group_arn_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId">account_id</a></code> | <code>str</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime">anomaly_visibility_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName">detector_name</a></code> | <code>str</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency">evaluation_frequency</a></code> | <code>str</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern">filter_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList">log_group_arn_list</a></code> | <code>typing.List[str]</code> | List of Arns for the given log group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `anomaly_visibility_time`<sup>Optional</sup> <a name="anomaly_visibility_time" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```python
anomaly_visibility_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detector_name`<sup>Optional</sup> <a name="detector_name" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName"></a>

```python
detector_name: str
```

- *Type:* str

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `evaluation_frequency`<sup>Optional</sup> <a name="evaluation_frequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```python
evaluation_frequency: str
```

- *Type:* str

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `filter_pattern`<sup>Optional</sup> <a name="filter_pattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern"></a>

```python
filter_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `log_group_arn_list`<sup>Optional</sup> <a name="log_group_arn_list" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```python
log_group_arn_list: typing.List[str]
```

- *Type:* typing.List[str]

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---



