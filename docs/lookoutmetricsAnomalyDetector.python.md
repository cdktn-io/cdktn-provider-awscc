# `lookoutmetricsAnomalyDetector` Submodule <a name="`lookoutmetricsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAnomalyDetector <a name="LookoutmetricsAnomalyDetector" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  anomaly_detector_config: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig,
  metric_set_list: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListStruct],
  anomaly_detector_description: str = None,
  anomaly_detector_name: str = None,
  kms_key_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.anomalyDetectorConfig">anomaly_detector_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | Configuration options for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.metricSetList">metric_set_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]</code> | List of metric sets for anomaly detection. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.anomalyDetectorDescription">anomaly_detector_description</a></code> | <code>str</code> | A description for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.anomalyDetectorName">anomaly_detector_name</a></code> | <code>str</code> | Name for the Amazon Lookout for Metrics Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | KMS key used to encrypt the AnomalyDetector data. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anomaly_detector_config`<sup>Required</sup> <a name="anomaly_detector_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.anomalyDetectorConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

Configuration options for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_config LookoutmetricsAnomalyDetector#anomaly_detector_config}

---

##### `metric_set_list`<sup>Required</sup> <a name="metric_set_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.metricSetList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]

List of metric sets for anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_list LookoutmetricsAnomalyDetector#metric_set_list}

---

##### `anomaly_detector_description`<sup>Optional</sup> <a name="anomaly_detector_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.anomalyDetectorDescription"></a>

- *Type:* str

A description for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_description LookoutmetricsAnomalyDetector#anomaly_detector_description}

---

##### `anomaly_detector_name`<sup>Optional</sup> <a name="anomaly_detector_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.anomalyDetectorName"></a>

- *Type:* str

Name for the Amazon Lookout for Metrics Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_name LookoutmetricsAnomalyDetector#anomaly_detector_name}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

KMS key used to encrypt the AnomalyDetector data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#kms_key_arn LookoutmetricsAnomalyDetector#kms_key_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig">put_anomaly_detector_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList">put_metric_set_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorDescription">reset_anomaly_detector_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorName">reset_anomaly_detector_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_anomaly_detector_config` <a name="put_anomaly_detector_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig"></a>

```python
def put_anomaly_detector_config(
  anomaly_detector_frequency: str
) -> None
```

###### `anomaly_detector_frequency`<sup>Required</sup> <a name="anomaly_detector_frequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig.parameter.anomalyDetectorFrequency"></a>

- *Type:* str

Frequency of anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_frequency LookoutmetricsAnomalyDetector#anomaly_detector_frequency}

---

##### `put_metric_set_list` <a name="put_metric_set_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList"></a>

```python
def put_metric_set_list(
  value: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]

---

##### `reset_anomaly_detector_description` <a name="reset_anomaly_detector_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorDescription"></a>

```python
def reset_anomaly_detector_description() -> None
```

##### `reset_anomaly_detector_name` <a name="reset_anomaly_detector_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorName"></a>

```python
def reset_anomaly_detector_name() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LookoutmetricsAnomalyDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LookoutmetricsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfig">anomaly_detector_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetList">metric_set_list</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList">LookoutmetricsAnomalyDetectorMetricSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfigInput">anomaly_detector_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescriptionInput">anomaly_detector_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorNameInput">anomaly_detector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetListInput">metric_set_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescription">anomaly_detector_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorName">anomaly_detector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anomaly_detector_config`<sup>Required</sup> <a name="anomaly_detector_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfig"></a>

```python
anomaly_detector_config: LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_set_list`<sup>Required</sup> <a name="metric_set_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetList"></a>

```python
metric_set_list: LookoutmetricsAnomalyDetectorMetricSetListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList">LookoutmetricsAnomalyDetectorMetricSetListStructList</a>

---

##### `anomaly_detector_config_input`<sup>Optional</sup> <a name="anomaly_detector_config_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfigInput"></a>

```python
anomaly_detector_config_input: IResolvable | LookoutmetricsAnomalyDetectorAnomalyDetectorConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---

##### `anomaly_detector_description_input`<sup>Optional</sup> <a name="anomaly_detector_description_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescriptionInput"></a>

```python
anomaly_detector_description_input: str
```

- *Type:* str

---

##### `anomaly_detector_name_input`<sup>Optional</sup> <a name="anomaly_detector_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorNameInput"></a>

```python
anomaly_detector_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `metric_set_list_input`<sup>Optional</sup> <a name="metric_set_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetListInput"></a>

```python
metric_set_list_input: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]

---

##### `anomaly_detector_description`<sup>Required</sup> <a name="anomaly_detector_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescription"></a>

```python
anomaly_detector_description: str
```

- *Type:* str

---

##### `anomaly_detector_name`<sup>Required</sup> <a name="anomaly_detector_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorName"></a>

```python
anomaly_detector_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAnomalyDetectorAnomalyDetectorConfig <a name="LookoutmetricsAnomalyDetectorAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig(
  anomaly_detector_frequency: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.property.anomalyDetectorFrequency">anomaly_detector_frequency</a></code> | <code>str</code> | Frequency of anomaly detection. |

---

##### `anomaly_detector_frequency`<sup>Required</sup> <a name="anomaly_detector_frequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.property.anomalyDetectorFrequency"></a>

```python
anomaly_detector_frequency: str
```

- *Type:* str

Frequency of anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_frequency LookoutmetricsAnomalyDetector#anomaly_detector_frequency}

---

### LookoutmetricsAnomalyDetectorConfig <a name="LookoutmetricsAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  anomaly_detector_config: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig,
  metric_set_list: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListStruct],
  anomaly_detector_description: str = None,
  anomaly_detector_name: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorConfig">anomaly_detector_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | Configuration options for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.metricSetList">metric_set_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]</code> | List of metric sets for anomaly detection. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorDescription">anomaly_detector_description</a></code> | <code>str</code> | A description for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorName">anomaly_detector_name</a></code> | <code>str</code> | Name for the Amazon Lookout for Metrics Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | KMS key used to encrypt the AnomalyDetector data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anomaly_detector_config`<sup>Required</sup> <a name="anomaly_detector_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorConfig"></a>

```python
anomaly_detector_config: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

Configuration options for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_config LookoutmetricsAnomalyDetector#anomaly_detector_config}

---

##### `metric_set_list`<sup>Required</sup> <a name="metric_set_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.metricSetList"></a>

```python
metric_set_list: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]

List of metric sets for anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_list LookoutmetricsAnomalyDetector#metric_set_list}

---

##### `anomaly_detector_description`<sup>Optional</sup> <a name="anomaly_detector_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorDescription"></a>

```python
anomaly_detector_description: str
```

- *Type:* str

A description for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_description LookoutmetricsAnomalyDetector#anomaly_detector_description}

---

##### `anomaly_detector_name`<sup>Optional</sup> <a name="anomaly_detector_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorName"></a>

```python
anomaly_detector_name: str
```

- *Type:* str

Name for the Amazon Lookout for Metrics Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_name LookoutmetricsAnomalyDetector#anomaly_detector_name}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

KMS key used to encrypt the AnomalyDetector data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#kms_key_arn LookoutmetricsAnomalyDetector#kms_key_arn}

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct(
  aggregation_function: str,
  metric_name: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.aggregationFunction">aggregation_function</a></code> | <code>str</code> | Operator used to aggregate metric values. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.metricName">metric_name</a></code> | <code>str</code> | Name of a column in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#namespace LookoutmetricsAnomalyDetector#namespace}. |

---

##### `aggregation_function`<sup>Required</sup> <a name="aggregation_function" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.aggregationFunction"></a>

```python
aggregation_function: str
```

- *Type:* str

Operator used to aggregate metric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#aggregation_function LookoutmetricsAnomalyDetector#aggregation_function}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_name LookoutmetricsAnomalyDetector#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#namespace LookoutmetricsAnomalyDetector#namespace}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSource <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource(
  app_flow_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig = None,
  cloudwatch_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig = None,
  rds_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig = None,
  redshift_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig = None,
  s3_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.appFlowConfig">app_flow_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.cloudwatchConfig">cloudwatch_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.rdsSourceConfig">rds_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.redshiftSourceConfig">redshift_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.s3SourceConfig">s3_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}. |

---

##### `app_flow_config`<sup>Optional</sup> <a name="app_flow_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.appFlowConfig"></a>

```python
app_flow_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}.

---

##### `cloudwatch_config`<sup>Optional</sup> <a name="cloudwatch_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.cloudwatchConfig"></a>

```python
cloudwatch_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}.

---

##### `rds_source_config`<sup>Optional</sup> <a name="rds_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.rdsSourceConfig"></a>

```python
rds_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}.

---

##### `redshift_source_config`<sup>Optional</sup> <a name="redshift_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.redshiftSourceConfig"></a>

```python
redshift_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}.

---

##### `s3_source_config`<sup>Optional</sup> <a name="s3_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.s3SourceConfig"></a>

```python
s3_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig(
  flow_name: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.flowName">flow_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |

---

##### `flow_name`<sup>Optional</sup> <a name="flow_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.flowName"></a>

```python
flow_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig(
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig(
  database_host: str = None,
  database_name: str = None,
  database_port: typing.Union[int, float] = None,
  db_instance_identifier: str = None,
  role_arn: str = None,
  secret_manager_arn: str = None,
  table_name: str = None,
  vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseHost">database_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databasePort">database_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}. |

---

##### `database_host`<sup>Optional</sup> <a name="database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseHost"></a>

```python
database_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

##### `database_port`<sup>Optional</sup> <a name="database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databasePort"></a>

```python
database_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration(
  security_group_id_list: typing.List[str] = None,
  subnet_id_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}. |

---

##### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

##### `subnet_id_list`<sup>Optional</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig(
  cluster_identifier: str = None,
  database_host: str = None,
  database_name: str = None,
  database_port: typing.Union[int, float] = None,
  role_arn: str = None,
  secret_manager_arn: str = None,
  table_name: str = None,
  vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseHost">database_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databasePort">database_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}. |

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}.

---

##### `database_host`<sup>Optional</sup> <a name="database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseHost"></a>

```python
database_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

##### `database_port`<sup>Optional</sup> <a name="database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databasePort"></a>

```python
database_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration(
  security_group_id_list: typing.List[str] = None,
  subnet_id_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}. |

---

##### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

##### `subnet_id_list`<sup>Optional</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig(
  file_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor = None,
  historical_data_path_list: typing.List[str] = None,
  role_arn: str = None,
  templated_path_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.fileFormatDescriptor">file_format_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.historicalDataPathList">historical_data_path_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.templatedPathList">templated_path_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}. |

---

##### `file_format_descriptor`<sup>Optional</sup> <a name="file_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.fileFormatDescriptor"></a>

```python
file_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}.

---

##### `historical_data_path_list`<sup>Optional</sup> <a name="historical_data_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.historicalDataPathList"></a>

```python
historical_data_path_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `templated_path_list`<sup>Optional</sup> <a name="templated_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.templatedPathList"></a>

```python
templated_path_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor(
  csv_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor = None,
  json_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.csvFormatDescriptor">csv_format_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.jsonFormatDescriptor">json_format_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}. |

---

##### `csv_format_descriptor`<sup>Optional</sup> <a name="csv_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.csvFormatDescriptor"></a>

```python
csv_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}.

---

##### `json_format_descriptor`<sup>Optional</sup> <a name="json_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.jsonFormatDescriptor"></a>

```python
json_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor(
  charset: str = None,
  contains_header: bool | IResolvable = None,
  delimiter: str = None,
  file_compression: str = None,
  header_list: typing.List[str] = None,
  quote_symbol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.charset">charset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.containsHeader">contains_header</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.fileCompression">file_compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.headerList">header_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.quoteSymbol">quote_symbol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}. |

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.charset"></a>

```python
charset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

##### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.containsHeader"></a>

```python
contains_header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}.

---

##### `file_compression`<sup>Optional</sup> <a name="file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.fileCompression"></a>

```python
file_compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

##### `header_list`<sup>Optional</sup> <a name="header_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.headerList"></a>

```python
header_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}.

---

##### `quote_symbol`<sup>Optional</sup> <a name="quote_symbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.quoteSymbol"></a>

```python
quote_symbol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor(
  charset: str = None,
  file_compression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.charset">charset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.fileCompression">file_compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}. |

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.charset"></a>

```python
charset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

##### `file_compression`<sup>Optional</sup> <a name="file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.fileCompression"></a>

```python
file_compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

### LookoutmetricsAnomalyDetectorMetricSetListStruct <a name="LookoutmetricsAnomalyDetectorMetricSetListStruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct(
  metric_list: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct],
  metric_set_name: str,
  metric_source: LookoutmetricsAnomalyDetectorMetricSetListMetricSource,
  dimension_list: typing.List[str] = None,
  metric_set_description: str = None,
  metric_set_frequency: str = None,
  offset: typing.Union[int, float] = None,
  timestamp_column: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricList">metric_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]</code> | Metrics captured by this MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetName">metric_set_name</a></code> | <code>str</code> | The name of the MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSource">metric_source</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_source LookoutmetricsAnomalyDetector#metric_source}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.dimensionList">dimension_list</a></code> | <code>typing.List[str]</code> | Dimensions for this MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetDescription">metric_set_description</a></code> | <code>str</code> | A description for the MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetFrequency">metric_set_frequency</a></code> | <code>str</code> | A frequency period to aggregate the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset, in seconds, between the frequency interval and the time at which the metrics are available. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timestampColumn">timestamp_column</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#timezone LookoutmetricsAnomalyDetector#timezone}. |

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricList"></a>

```python
metric_list: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]

Metrics captured by this MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_list LookoutmetricsAnomalyDetector#metric_list}

---

##### `metric_set_name`<sup>Required</sup> <a name="metric_set_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetName"></a>

```python
metric_set_name: str
```

- *Type:* str

The name of the MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_name LookoutmetricsAnomalyDetector#metric_set_name}

---

##### `metric_source`<sup>Required</sup> <a name="metric_source" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSource"></a>

```python
metric_source: LookoutmetricsAnomalyDetectorMetricSetListMetricSource
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_source LookoutmetricsAnomalyDetector#metric_source}.

---

##### `dimension_list`<sup>Optional</sup> <a name="dimension_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.dimensionList"></a>

```python
dimension_list: typing.List[str]
```

- *Type:* typing.List[str]

Dimensions for this MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#dimension_list LookoutmetricsAnomalyDetector#dimension_list}

---

##### `metric_set_description`<sup>Optional</sup> <a name="metric_set_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetDescription"></a>

```python
metric_set_description: str
```

- *Type:* str

A description for the MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_description LookoutmetricsAnomalyDetector#metric_set_description}

---

##### `metric_set_frequency`<sup>Optional</sup> <a name="metric_set_frequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetFrequency"></a>

```python
metric_set_frequency: str
```

- *Type:* str

A frequency period to aggregate the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_frequency LookoutmetricsAnomalyDetector#metric_set_frequency}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset, in seconds, between the frequency interval and the time at which the metrics are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#offset LookoutmetricsAnomalyDetector#offset}

---

##### `timestamp_column`<sup>Optional</sup> <a name="timestamp_column" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timestampColumn"></a>

```python
timestamp_column: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#timezone LookoutmetricsAnomalyDetector#timezone}.

---

### LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn <a name="LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn(
  column_format: str = None,
  column_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnFormat">column_format</a></code> | <code>str</code> | A timestamp format for the timestamps in the dataset. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnName">column_name</a></code> | <code>str</code> | Name of a column in the data. |

---

##### `column_format`<sup>Optional</sup> <a name="column_format" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnFormat"></a>

```python
column_format: str
```

- *Type:* str

A timestamp format for the timestamps in the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#column_format LookoutmetricsAnomalyDetector#column_format}

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#column_name LookoutmetricsAnomalyDetector#column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference <a name="LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequencyInput">anomaly_detector_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency">anomaly_detector_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anomaly_detector_frequency_input`<sup>Optional</sup> <a name="anomaly_detector_frequency_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequencyInput"></a>

```python
anomaly_detector_frequency_input: str
```

- *Type:* str

---

##### `anomaly_detector_frequency`<sup>Required</sup> <a name="anomaly_detector_frequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency"></a>

```python
anomaly_detector_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorAnomalyDetectorConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunctionInput">aggregation_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction">aggregation_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_function_input`<sup>Optional</sup> <a name="aggregation_function_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunctionInput"></a>

```python
aggregation_function_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `aggregation_function`<sup>Required</sup> <a name="aggregation_function" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction"></a>

```python
aggregation_function: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetFlowName">reset_flow_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flow_name` <a name="reset_flow_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetFlowName"></a>

```python
def reset_flow_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowNameInput">flow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName">flow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_name_input`<sup>Optional</sup> <a name="flow_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowNameInput"></a>

```python
flow_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `flow_name`<sup>Required</sup> <a name="flow_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName"></a>

```python
flow_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig">put_app_flow_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig">put_cloudwatch_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig">put_rds_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig">put_redshift_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig">put_s3_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetAppFlowConfig">reset_app_flow_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetCloudwatchConfig">reset_cloudwatch_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRdsSourceConfig">reset_rds_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRedshiftSourceConfig">reset_redshift_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetS3SourceConfig">reset_s3_source_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app_flow_config` <a name="put_app_flow_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig"></a>

```python
def put_app_flow_config(
  flow_name: str = None,
  role_arn: str = None
) -> None
```

###### `flow_name`<sup>Optional</sup> <a name="flow_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig.parameter.flowName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `put_cloudwatch_config` <a name="put_cloudwatch_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig"></a>

```python
def put_cloudwatch_config(
  role_arn: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `put_rds_source_config` <a name="put_rds_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig"></a>

```python
def put_rds_source_config(
  database_host: str = None,
  database_name: str = None,
  database_port: typing.Union[int, float] = None,
  db_instance_identifier: str = None,
  role_arn: str = None,
  secret_manager_arn: str = None,
  table_name: str = None,
  vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration = None
) -> None
```

###### `database_host`<sup>Optional</sup> <a name="database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.databaseHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

###### `database_port`<sup>Optional</sup> <a name="database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.databasePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

###### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.dbInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

###### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.secretManagerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

###### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

##### `put_redshift_source_config` <a name="put_redshift_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig"></a>

```python
def put_redshift_source_config(
  cluster_identifier: str = None,
  database_host: str = None,
  database_name: str = None,
  database_port: typing.Union[int, float] = None,
  role_arn: str = None,
  secret_manager_arn: str = None,
  table_name: str = None,
  vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration = None
) -> None
```

###### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}.

---

###### `database_host`<sup>Optional</sup> <a name="database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.databaseHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

###### `database_port`<sup>Optional</sup> <a name="database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.databasePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

###### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.secretManagerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

###### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

##### `put_s3_source_config` <a name="put_s3_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig"></a>

```python
def put_s3_source_config(
  file_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor = None,
  historical_data_path_list: typing.List[str] = None,
  role_arn: str = None,
  templated_path_list: typing.List[str] = None
) -> None
```

###### `file_format_descriptor`<sup>Optional</sup> <a name="file_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig.parameter.fileFormatDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}.

---

###### `historical_data_path_list`<sup>Optional</sup> <a name="historical_data_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig.parameter.historicalDataPathList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

###### `templated_path_list`<sup>Optional</sup> <a name="templated_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig.parameter.templatedPathList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}.

---

##### `reset_app_flow_config` <a name="reset_app_flow_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetAppFlowConfig"></a>

```python
def reset_app_flow_config() -> None
```

##### `reset_cloudwatch_config` <a name="reset_cloudwatch_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetCloudwatchConfig"></a>

```python
def reset_cloudwatch_config() -> None
```

##### `reset_rds_source_config` <a name="reset_rds_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRdsSourceConfig"></a>

```python
def reset_rds_source_config() -> None
```

##### `reset_redshift_source_config` <a name="reset_redshift_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRedshiftSourceConfig"></a>

```python
def reset_redshift_source_config() -> None
```

##### `reset_s3_source_config` <a name="reset_s3_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetS3SourceConfig"></a>

```python
def reset_s3_source_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig">app_flow_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig">cloudwatch_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig">rds_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig">redshift_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig">s3_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfigInput">app_flow_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfigInput">cloudwatch_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfigInput">rds_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfigInput">redshift_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfigInput">s3_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_flow_config`<sup>Required</sup> <a name="app_flow_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig"></a>

```python
app_flow_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a>

---

##### `cloudwatch_config`<sup>Required</sup> <a name="cloudwatch_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig"></a>

```python
cloudwatch_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a>

---

##### `rds_source_config`<sup>Required</sup> <a name="rds_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig"></a>

```python
rds_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a>

---

##### `redshift_source_config`<sup>Required</sup> <a name="redshift_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig"></a>

```python
redshift_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a>

---

##### `s3_source_config`<sup>Required</sup> <a name="s3_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig"></a>

```python
s3_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a>

---

##### `app_flow_config_input`<sup>Optional</sup> <a name="app_flow_config_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfigInput"></a>

```python
app_flow_config_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---

##### `cloudwatch_config_input`<sup>Optional</sup> <a name="cloudwatch_config_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfigInput"></a>

```python
cloudwatch_config_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---

##### `rds_source_config_input`<sup>Optional</sup> <a name="rds_source_config_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfigInput"></a>

```python
rds_source_config_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---

##### `redshift_source_config_input`<sup>Optional</sup> <a name="redshift_source_config_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfigInput"></a>

```python
redshift_source_config_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---

##### `s3_source_config_input`<sup>Optional</sup> <a name="s3_source_config_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfigInput"></a>

```python
s3_source_config_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseHost">reset_database_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabasePort">reset_database_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDbInstanceIdentifier">reset_db_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetSecretManagerArn">reset_secret_manager_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  security_group_id_list: typing.List[str] = None,
  subnet_id_list: typing.List[str] = None
) -> None
```

###### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration.parameter.securityGroupIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

###### `subnet_id_list`<sup>Optional</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration.parameter.subnetIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

##### `reset_database_host` <a name="reset_database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseHost"></a>

```python
def reset_database_host() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_database_port` <a name="reset_database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabasePort"></a>

```python
def reset_database_port() -> None
```

##### `reset_db_instance_identifier` <a name="reset_db_instance_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDbInstanceIdentifier"></a>

```python
def reset_db_instance_identifier() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_manager_arn` <a name="reset_secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetSecretManagerArn"></a>

```python
def reset_secret_manager_arn() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHostInput">database_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePortInput">database_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifierInput">db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArnInput">secret_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost">database_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort">database_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a>

---

##### `database_host_input`<sup>Optional</sup> <a name="database_host_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHostInput"></a>

```python
database_host_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `database_port_input`<sup>Optional</sup> <a name="database_port_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePortInput"></a>

```python
database_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_instance_identifier_input`<sup>Optional</sup> <a name="db_instance_identifier_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifierInput"></a>

```python
db_instance_identifier_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_manager_arn_input`<sup>Optional</sup> <a name="secret_manager_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArnInput"></a>

```python
secret_manager_arn_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---

##### `database_host`<sup>Required</sup> <a name="database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost"></a>

```python
database_host: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_port`<sup>Required</sup> <a name="database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort"></a>

```python
database_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList">reset_security_group_id_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSubnetIdList">reset_subnet_id_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_id_list` <a name="reset_security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList"></a>

```python
def reset_security_group_id_list() -> None
```

##### `reset_subnet_id_list` <a name="reset_subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSubnetIdList"></a>

```python
def reset_subnet_id_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput">security_group_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput">subnet_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id_list_input`<sup>Optional</sup> <a name="security_group_id_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput"></a>

```python
security_group_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_list_input`<sup>Optional</sup> <a name="subnet_id_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput"></a>

```python
subnet_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_list`<sup>Required</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetClusterIdentifier">reset_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseHost">reset_database_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabasePort">reset_database_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetSecretManagerArn">reset_secret_manager_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  security_group_id_list: typing.List[str] = None,
  subnet_id_list: typing.List[str] = None
) -> None
```

###### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration.parameter.securityGroupIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

###### `subnet_id_list`<sup>Optional</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration.parameter.subnetIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

##### `reset_cluster_identifier` <a name="reset_cluster_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetClusterIdentifier"></a>

```python
def reset_cluster_identifier() -> None
```

##### `reset_database_host` <a name="reset_database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseHost"></a>

```python
def reset_database_host() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_database_port` <a name="reset_database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabasePort"></a>

```python
def reset_database_port() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_manager_arn` <a name="reset_secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetSecretManagerArn"></a>

```python
def reset_secret_manager_arn() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHostInput">database_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePortInput">database_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArnInput">secret_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost">database_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort">database_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a>

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `database_host_input`<sup>Optional</sup> <a name="database_host_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHostInput"></a>

```python
database_host_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `database_port_input`<sup>Optional</sup> <a name="database_port_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePortInput"></a>

```python
database_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_manager_arn_input`<sup>Optional</sup> <a name="secret_manager_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArnInput"></a>

```python
secret_manager_arn_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `database_host`<sup>Required</sup> <a name="database_host" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost"></a>

```python
database_host: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_port`<sup>Required</sup> <a name="database_port" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort"></a>

```python
database_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList">reset_security_group_id_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSubnetIdList">reset_subnet_id_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_id_list` <a name="reset_security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList"></a>

```python
def reset_security_group_id_list() -> None
```

##### `reset_subnet_id_list` <a name="reset_subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSubnetIdList"></a>

```python
def reset_subnet_id_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput">security_group_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput">subnet_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id_list_input`<sup>Optional</sup> <a name="security_group_id_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput"></a>

```python
security_group_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_list_input`<sup>Optional</sup> <a name="subnet_id_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput"></a>

```python
subnet_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_list`<sup>Required</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetCharset">reset_charset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetContainsHeader">reset_contains_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetFileCompression">reset_file_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetHeaderList">reset_header_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetQuoteSymbol">reset_quote_symbol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_charset` <a name="reset_charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetCharset"></a>

```python
def reset_charset() -> None
```

##### `reset_contains_header` <a name="reset_contains_header" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetContainsHeader"></a>

```python
def reset_contains_header() -> None
```

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_file_compression` <a name="reset_file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetFileCompression"></a>

```python
def reset_file_compression() -> None
```

##### `reset_header_list` <a name="reset_header_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetHeaderList"></a>

```python
def reset_header_list() -> None
```

##### `reset_quote_symbol` <a name="reset_quote_symbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetQuoteSymbol"></a>

```python
def reset_quote_symbol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charsetInput">charset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeaderInput">contains_header_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompressionInput">file_compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerListInput">header_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbolInput">quote_symbol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset">charset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader">contains_header</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression">file_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList">header_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol">quote_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `charset_input`<sup>Optional</sup> <a name="charset_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charsetInput"></a>

```python
charset_input: str
```

- *Type:* str

---

##### `contains_header_input`<sup>Optional</sup> <a name="contains_header_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeaderInput"></a>

```python
contains_header_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `file_compression_input`<sup>Optional</sup> <a name="file_compression_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompressionInput"></a>

```python
file_compression_input: str
```

- *Type:* str

---

##### `header_list_input`<sup>Optional</sup> <a name="header_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerListInput"></a>

```python
header_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote_symbol_input`<sup>Optional</sup> <a name="quote_symbol_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbolInput"></a>

```python
quote_symbol_input: str
```

- *Type:* str

---

##### `charset`<sup>Required</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset"></a>

```python
charset: str
```

- *Type:* str

---

##### `contains_header`<sup>Required</sup> <a name="contains_header" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader"></a>

```python
contains_header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `file_compression`<sup>Required</sup> <a name="file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression"></a>

```python
file_compression: str
```

- *Type:* str

---

##### `header_list`<sup>Required</sup> <a name="header_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList"></a>

```python
header_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote_symbol`<sup>Required</sup> <a name="quote_symbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol"></a>

```python
quote_symbol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetCharset">reset_charset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetFileCompression">reset_file_compression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_charset` <a name="reset_charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetCharset"></a>

```python
def reset_charset() -> None
```

##### `reset_file_compression` <a name="reset_file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetFileCompression"></a>

```python
def reset_file_compression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charsetInput">charset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompressionInput">file_compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset">charset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression">file_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `charset_input`<sup>Optional</sup> <a name="charset_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charsetInput"></a>

```python
charset_input: str
```

- *Type:* str

---

##### `file_compression_input`<sup>Optional</sup> <a name="file_compression_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompressionInput"></a>

```python
file_compression_input: str
```

- *Type:* str

---

##### `charset`<sup>Required</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset"></a>

```python
charset: str
```

- *Type:* str

---

##### `file_compression`<sup>Required</sup> <a name="file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression"></a>

```python
file_compression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor">put_csv_format_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor">put_json_format_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetCsvFormatDescriptor">reset_csv_format_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetJsonFormatDescriptor">reset_json_format_descriptor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv_format_descriptor` <a name="put_csv_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor"></a>

```python
def put_csv_format_descriptor(
  charset: str = None,
  contains_header: bool | IResolvable = None,
  delimiter: str = None,
  file_compression: str = None,
  header_list: typing.List[str] = None,
  quote_symbol: str = None
) -> None
```

###### `charset`<sup>Optional</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.charset"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

###### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.containsHeader"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}.

---

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}.

---

###### `file_compression`<sup>Optional</sup> <a name="file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.fileCompression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

###### `header_list`<sup>Optional</sup> <a name="header_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.headerList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}.

---

###### `quote_symbol`<sup>Optional</sup> <a name="quote_symbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.quoteSymbol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}.

---

##### `put_json_format_descriptor` <a name="put_json_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor"></a>

```python
def put_json_format_descriptor(
  charset: str = None,
  file_compression: str = None
) -> None
```

###### `charset`<sup>Optional</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor.parameter.charset"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

###### `file_compression`<sup>Optional</sup> <a name="file_compression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor.parameter.fileCompression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

##### `reset_csv_format_descriptor` <a name="reset_csv_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetCsvFormatDescriptor"></a>

```python
def reset_csv_format_descriptor() -> None
```

##### `reset_json_format_descriptor` <a name="reset_json_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetJsonFormatDescriptor"></a>

```python
def reset_json_format_descriptor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor">csv_format_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor">json_format_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptorInput">csv_format_descriptor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptorInput">json_format_descriptor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_format_descriptor`<sup>Required</sup> <a name="csv_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor"></a>

```python
csv_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a>

---

##### `json_format_descriptor`<sup>Required</sup> <a name="json_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor"></a>

```python
json_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a>

---

##### `csv_format_descriptor_input`<sup>Optional</sup> <a name="csv_format_descriptor_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptorInput"></a>

```python
csv_format_descriptor_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---

##### `json_format_descriptor_input`<sup>Optional</sup> <a name="json_format_descriptor_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptorInput"></a>

```python
json_format_descriptor_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor">put_file_format_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetFileFormatDescriptor">reset_file_format_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetHistoricalDataPathList">reset_historical_data_path_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetTemplatedPathList">reset_templated_path_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_format_descriptor` <a name="put_file_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor"></a>

```python
def put_file_format_descriptor(
  csv_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor = None,
  json_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor = None
) -> None
```

###### `csv_format_descriptor`<sup>Optional</sup> <a name="csv_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor.parameter.csvFormatDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}.

---

###### `json_format_descriptor`<sup>Optional</sup> <a name="json_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor.parameter.jsonFormatDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}.

---

##### `reset_file_format_descriptor` <a name="reset_file_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetFileFormatDescriptor"></a>

```python
def reset_file_format_descriptor() -> None
```

##### `reset_historical_data_path_list` <a name="reset_historical_data_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetHistoricalDataPathList"></a>

```python
def reset_historical_data_path_list() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_templated_path_list` <a name="reset_templated_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetTemplatedPathList"></a>

```python
def reset_templated_path_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor">file_format_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptorInput">file_format_descriptor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathListInput">historical_data_path_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathListInput">templated_path_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList">historical_data_path_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList">templated_path_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_format_descriptor`<sup>Required</sup> <a name="file_format_descriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor"></a>

```python
file_format_descriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a>

---

##### `file_format_descriptor_input`<sup>Optional</sup> <a name="file_format_descriptor_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptorInput"></a>

```python
file_format_descriptor_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---

##### `historical_data_path_list_input`<sup>Optional</sup> <a name="historical_data_path_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathListInput"></a>

```python
historical_data_path_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `templated_path_list_input`<sup>Optional</sup> <a name="templated_path_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathListInput"></a>

```python
templated_path_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `historical_data_path_list`<sup>Required</sup> <a name="historical_data_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList"></a>

```python
historical_data_path_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `templated_path_list`<sup>Required</sup> <a name="templated_path_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList"></a>

```python
templated_path_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListStructList <a name="LookoutmetricsAnomalyDetectorMetricSetListStructList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>]

---


### LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList">put_metric_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource">put_metric_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn">put_timestamp_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetDimensionList">reset_dimension_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetDescription">reset_metric_set_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetFrequency">reset_metric_set_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimestampColumn">reset_timestamp_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_list` <a name="put_metric_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList"></a>

```python
def put_metric_list(
  value: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]

---

##### `put_metric_source` <a name="put_metric_source" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource"></a>

```python
def put_metric_source(
  app_flow_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig = None,
  cloudwatch_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig = None,
  rds_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig = None,
  redshift_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig = None,
  s3_source_config: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig = None
) -> None
```

###### `app_flow_config`<sup>Optional</sup> <a name="app_flow_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.appFlowConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}.

---

###### `cloudwatch_config`<sup>Optional</sup> <a name="cloudwatch_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.cloudwatchConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}.

---

###### `rds_source_config`<sup>Optional</sup> <a name="rds_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.rdsSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}.

---

###### `redshift_source_config`<sup>Optional</sup> <a name="redshift_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.redshiftSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}.

---

###### `s3_source_config`<sup>Optional</sup> <a name="s3_source_config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.s3SourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}.

---

##### `put_timestamp_column` <a name="put_timestamp_column" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn"></a>

```python
def put_timestamp_column(
  column_format: str = None,
  column_name: str = None
) -> None
```

###### `column_format`<sup>Optional</sup> <a name="column_format" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn.parameter.columnFormat"></a>

- *Type:* str

A timestamp format for the timestamps in the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#column_format LookoutmetricsAnomalyDetector#column_format}

---

###### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn.parameter.columnName"></a>

- *Type:* str

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_anomaly_detector#column_name LookoutmetricsAnomalyDetector#column_name}

---

##### `reset_dimension_list` <a name="reset_dimension_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetDimensionList"></a>

```python
def reset_dimension_list() -> None
```

##### `reset_metric_set_description` <a name="reset_metric_set_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetDescription"></a>

```python
def reset_metric_set_description() -> None
```

##### `reset_metric_set_frequency` <a name="reset_metric_set_frequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetFrequency"></a>

```python
def reset_metric_set_frequency() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_timestamp_column` <a name="reset_timestamp_column" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimestampColumn"></a>

```python
def reset_timestamp_column() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList">metric_list</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource">metric_source</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn">timestamp_column</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionListInput">dimension_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricListInput">metric_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescriptionInput">metric_set_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequencyInput">metric_set_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetNameInput">metric_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSourceInput">metric_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumnInput">timestamp_column_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList">dimension_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription">metric_set_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency">metric_set_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName">metric_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList"></a>

```python
metric_list: LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a>

---

##### `metric_source`<sup>Required</sup> <a name="metric_source" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource"></a>

```python
metric_source: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a>

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn"></a>

```python
timestamp_column: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a>

---

##### `dimension_list_input`<sup>Optional</sup> <a name="dimension_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionListInput"></a>

```python
dimension_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_list_input`<sup>Optional</sup> <a name="metric_list_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricListInput"></a>

```python
metric_list_input: IResolvable | typing.List[LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>]

---

##### `metric_set_description_input`<sup>Optional</sup> <a name="metric_set_description_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescriptionInput"></a>

```python
metric_set_description_input: str
```

- *Type:* str

---

##### `metric_set_frequency_input`<sup>Optional</sup> <a name="metric_set_frequency_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequencyInput"></a>

```python
metric_set_frequency_input: str
```

- *Type:* str

---

##### `metric_set_name_input`<sup>Optional</sup> <a name="metric_set_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetNameInput"></a>

```python
metric_set_name_input: str
```

- *Type:* str

---

##### `metric_source_input`<sup>Optional</sup> <a name="metric_source_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSourceInput"></a>

```python
metric_source_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_column_input`<sup>Optional</sup> <a name="timestamp_column_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumnInput"></a>

```python
timestamp_column_input: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `dimension_list`<sup>Required</sup> <a name="dimension_list" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList"></a>

```python
dimension_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_set_description`<sup>Required</sup> <a name="metric_set_description" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription"></a>

```python
metric_set_description: str
```

- *Type:* str

---

##### `metric_set_frequency`<sup>Required</sup> <a name="metric_set_frequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency"></a>

```python
metric_set_frequency: str
```

- *Type:* str

---

##### `metric_set_name`<sup>Required</sup> <a name="metric_set_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName"></a>

```python
metric_set_name: str
```

- *Type:* str

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_anomaly_detector

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnFormat">reset_column_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_format` <a name="reset_column_format" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnFormat"></a>

```python
def reset_column_format() -> None
```

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormatInput">column_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat">column_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_format_input`<sup>Optional</sup> <a name="column_format_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormatInput"></a>

```python
column_format_input: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_format`<sup>Required</sup> <a name="column_format" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat"></a>

```python
column_format: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---



