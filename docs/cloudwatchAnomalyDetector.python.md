# `cloudwatchAnomalyDetector` Submodule <a name="`cloudwatchAnomalyDetector` Submodule" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAnomalyDetector <a name="CloudwatchAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: CloudwatchAnomalyDetectorConfiguration = None,
  dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorDimensions] = None,
  metric_characteristics: CloudwatchAnomalyDetectorMetricCharacteristics = None,
  metric_math_anomaly_detector: CloudwatchAnomalyDetectorMetricMathAnomalyDetector = None,
  metric_name: str = None,
  namespace: str = None,
  single_metric_anomaly_detector: CloudwatchAnomalyDetectorSingleMetricAnomalyDetector = None,
  stat: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.metricCharacteristics">metric_characteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.metricMathAnomalyDetector">metric_math_anomaly_detector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.singleMetricAnomalyDetector">single_metric_anomaly_detector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.dimensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metric_characteristics`<sup>Optional</sup> <a name="metric_characteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.metricCharacteristics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}.

---

##### `metric_math_anomaly_detector`<sup>Optional</sup> <a name="metric_math_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.metricMathAnomalyDetector"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `single_metric_anomaly_detector`<sup>Optional</sup> <a name="single_metric_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.singleMetricAnomalyDetector"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.stat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics">put_metric_characteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector">put_metric_math_anomaly_detector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector">put_single_metric_anomaly_detector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricCharacteristics">reset_metric_characteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricMathAnomalyDetector">reset_metric_math_anomaly_detector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetSingleMetricAnomalyDetector">reset_single_metric_anomaly_detector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetStat">reset_stat</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration"></a>

```python
def put_configuration(
  excluded_time_ranges: IResolvable | typing.List[CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges] = None,
  metric_time_zone: str = None
) -> None
```

###### `excluded_time_ranges`<sup>Optional</sup> <a name="excluded_time_ranges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration.parameter.excludedTimeRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}.

---

###### `metric_time_zone`<sup>Optional</sup> <a name="metric_time_zone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration.parameter.metricTimeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}.

---

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[CloudwatchAnomalyDetectorDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]

---

##### `put_metric_characteristics` <a name="put_metric_characteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics"></a>

```python
def put_metric_characteristics(
  periodic_spikes: bool | IResolvable = None
) -> None
```

###### `periodic_spikes`<sup>Optional</sup> <a name="periodic_spikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics.parameter.periodicSpikes"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}.

---

##### `put_metric_math_anomaly_detector` <a name="put_metric_math_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector"></a>

```python
def put_metric_math_anomaly_detector(
  metric_data_queries: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries] = None
) -> None
```

###### `metric_data_queries`<sup>Optional</sup> <a name="metric_data_queries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector.parameter.metricDataQueries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}.

---

##### `put_single_metric_anomaly_detector` <a name="put_single_metric_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector"></a>

```python
def put_single_metric_anomaly_detector(
  account_id: str = None,
  dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions] = None,
  metric_name: str = None,
  namespace: str = None,
  stat: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.dimensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

###### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.stat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_metric_characteristics` <a name="reset_metric_characteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricCharacteristics"></a>

```python
def reset_metric_characteristics() -> None
```

##### `reset_metric_math_anomaly_detector` <a name="reset_metric_math_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricMathAnomalyDetector"></a>

```python
def reset_metric_math_anomaly_detector() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_single_metric_anomaly_detector` <a name="reset_single_metric_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetSingleMetricAnomalyDetector"></a>

```python
def reset_single_metric_anomaly_detector() -> None
```

##### `reset_stat` <a name="reset_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetStat"></a>

```python
def reset_stat() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchAnomalyDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.anomalyDetectorId">anomaly_detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference">CloudwatchAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristics">metric_characteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetector">metric_math_anomaly_detector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetector">single_metric_anomaly_detector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristicsInput">metric_characteristics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetectorInput">metric_math_anomaly_detector_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetectorInput">single_metric_anomaly_detector_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.stat">stat</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anomaly_detector_id`<sup>Required</sup> <a name="anomaly_detector_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.anomalyDetectorId"></a>

```python
anomaly_detector_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configuration"></a>

```python
configuration: CloudwatchAnomalyDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference">CloudwatchAnomalyDetectorConfigurationOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensions"></a>

```python
dimensions: CloudwatchAnomalyDetectorDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorDimensionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_characteristics`<sup>Required</sup> <a name="metric_characteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristics"></a>

```python
metric_characteristics: CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a>

---

##### `metric_math_anomaly_detector`<sup>Required</sup> <a name="metric_math_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetector"></a>

```python
metric_math_anomaly_detector: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a>

---

##### `single_metric_anomaly_detector`<sup>Required</sup> <a name="single_metric_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetector"></a>

```python
single_metric_anomaly_detector: CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configurationInput"></a>

```python
configuration_input: IResolvable | CloudwatchAnomalyDetectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[CloudwatchAnomalyDetectorDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]

---

##### `metric_characteristics_input`<sup>Optional</sup> <a name="metric_characteristics_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristicsInput"></a>

```python
metric_characteristics_input: IResolvable | CloudwatchAnomalyDetectorMetricCharacteristics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

---

##### `metric_math_anomaly_detector_input`<sup>Optional</sup> <a name="metric_math_anomaly_detector_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetectorInput"></a>

```python
metric_math_anomaly_detector_input: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetector
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `single_metric_anomaly_detector_input`<sup>Optional</sup> <a name="single_metric_anomaly_detector_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetectorInput"></a>

```python
single_metric_anomaly_detector_input: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetector
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAnomalyDetectorConfig <a name="CloudwatchAnomalyDetectorConfig" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: CloudwatchAnomalyDetectorConfiguration = None,
  dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorDimensions] = None,
  metric_characteristics: CloudwatchAnomalyDetectorMetricCharacteristics = None,
  metric_math_anomaly_detector: CloudwatchAnomalyDetectorMetricMathAnomalyDetector = None,
  metric_name: str = None,
  namespace: str = None,
  single_metric_anomaly_detector: CloudwatchAnomalyDetectorSingleMetricAnomalyDetector = None,
  stat: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricCharacteristics">metric_characteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricMathAnomalyDetector">metric_math_anomaly_detector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.singleMetricAnomalyDetector">single_metric_anomaly_detector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.configuration"></a>

```python
configuration: CloudwatchAnomalyDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metric_characteristics`<sup>Optional</sup> <a name="metric_characteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricCharacteristics"></a>

```python
metric_characteristics: CloudwatchAnomalyDetectorMetricCharacteristics
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}.

---

##### `metric_math_anomaly_detector`<sup>Optional</sup> <a name="metric_math_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricMathAnomalyDetector"></a>

```python
metric_math_anomaly_detector: CloudwatchAnomalyDetectorMetricMathAnomalyDetector
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `single_metric_anomaly_detector`<sup>Optional</sup> <a name="single_metric_anomaly_detector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.singleMetricAnomalyDetector"></a>

```python
single_metric_anomaly_detector: CloudwatchAnomalyDetectorSingleMetricAnomalyDetector
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.stat"></a>

```python
stat: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

### CloudwatchAnomalyDetectorConfiguration <a name="CloudwatchAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration(
  excluded_time_ranges: IResolvable | typing.List[CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges] = None,
  metric_time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.excludedTimeRanges">excluded_time_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.metricTimeZone">metric_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}. |

---

##### `excluded_time_ranges`<sup>Optional</sup> <a name="excluded_time_ranges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.excludedTimeRanges"></a>

```python
excluded_time_ranges: IResolvable | typing.List[CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}.

---

##### `metric_time_zone`<sup>Optional</sup> <a name="metric_time_zone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.metricTimeZone"></a>

```python
metric_time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}.

---

### CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges(
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CloudwatchAnomalyDetector#end_time}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CloudwatchAnomalyDetector#start_time}. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CloudwatchAnomalyDetector#end_time}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CloudwatchAnomalyDetector#start_time}.

---

### CloudwatchAnomalyDetectorDimensions <a name="CloudwatchAnomalyDetectorDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

### CloudwatchAnomalyDetectorMetricCharacteristics <a name="CloudwatchAnomalyDetectorMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics(
  periodic_spikes: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.property.periodicSpikes">periodic_spikes</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}. |

---

##### `periodic_spikes`<sup>Optional</sup> <a name="periodic_spikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.property.periodicSpikes"></a>

```python
periodic_spikes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetector <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector(
  metric_data_queries: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.property.metricDataQueries">metric_data_queries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}. |

---

##### `metric_data_queries`<sup>Optional</sup> <a name="metric_data_queries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.property.metricDataQueries"></a>

```python
metric_data_queries: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries(
  account_id: str = None,
  expression: str = None,
  id: str = None,
  label: str = None,
  metric_stat: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat = None,
  period: typing.Union[int, float] = None,
  return_data: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CloudwatchAnomalyDetector#expression}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CloudwatchAnomalyDetector#id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CloudwatchAnomalyDetector#label}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CloudwatchAnomalyDetector#metric_stat}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.returnData">return_data</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CloudwatchAnomalyDetector#return_data}. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CloudwatchAnomalyDetector#expression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CloudwatchAnomalyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CloudwatchAnomalyDetector#label}.

---

##### `metric_stat`<sup>Optional</sup> <a name="metric_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.metricStat"></a>

```python
metric_stat: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CloudwatchAnomalyDetector#metric_stat}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

##### `return_data`<sup>Optional</sup> <a name="return_data" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.returnData"></a>

```python
return_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CloudwatchAnomalyDetector#return_data}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat(
  metric: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric = None,
  period: typing.Union[int, float] = None,
  stat: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.metric"></a>

```python
metric: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.stat"></a>

```python
stat: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric(
  dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions] = None,
  metric_name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

### CloudwatchAnomalyDetectorSingleMetricAnomalyDetector <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector(
  account_id: str = None,
  dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions] = None,
  metric_name: str = None,
  namespace: str = None,
  stat: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.stat"></a>

```python
stat: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]

---


### CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>

---


### CloudwatchAnomalyDetectorConfigurationOutputReference <a name="CloudwatchAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges">put_excluded_time_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetExcludedTimeRanges">reset_excluded_time_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetMetricTimeZone">reset_metric_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_excluded_time_ranges` <a name="put_excluded_time_ranges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges"></a>

```python
def put_excluded_time_ranges(
  value: IResolvable | typing.List[CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]

---

##### `reset_excluded_time_ranges` <a name="reset_excluded_time_ranges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetExcludedTimeRanges"></a>

```python
def reset_excluded_time_ranges() -> None
```

##### `reset_metric_time_zone` <a name="reset_metric_time_zone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetMetricTimeZone"></a>

```python
def reset_metric_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges">excluded_time_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRangesInput">excluded_time_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZoneInput">metric_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone">metric_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_time_ranges`<sup>Required</sup> <a name="excluded_time_ranges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges"></a>

```python
excluded_time_ranges: CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a>

---

##### `excluded_time_ranges_input`<sup>Optional</sup> <a name="excluded_time_ranges_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRangesInput"></a>

```python
excluded_time_ranges_input: IResolvable | typing.List[CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>]

---

##### `metric_time_zone_input`<sup>Optional</sup> <a name="metric_time_zone_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZoneInput"></a>

```python
metric_time_zone_input: str
```

- *Type:* str

---

##### `metric_time_zone`<sup>Required</sup> <a name="metric_time_zone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone"></a>

```python
metric_time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

---


### CloudwatchAnomalyDetectorDimensionsList <a name="CloudwatchAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAnomalyDetectorDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>]

---


### CloudwatchAnomalyDetectorDimensionsOutputReference <a name="CloudwatchAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>

---


### CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference <a name="CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resetPeriodicSpikes">reset_periodic_spikes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_periodic_spikes` <a name="reset_periodic_spikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resetPeriodicSpikes"></a>

```python
def reset_periodic_spikes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikesInput">periodic_spikes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes">periodic_spikes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `periodic_spikes_input`<sup>Optional</sup> <a name="periodic_spikes_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikesInput"></a>

```python
periodic_spikes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `periodic_spikes`<sup>Required</sup> <a name="periodic_spikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes"></a>

```python
periodic_spikes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorMetricCharacteristics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetStat">reset_stat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric"></a>

```python
def put_metric(
  dimensions: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions] = None,
  metric_name: str = None,
  namespace: str = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric.parameter.dimensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_stat` <a name="reset_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetStat"></a>

```python
def reset_stat() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metricInput">metric_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```python
metric: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metricInput"></a>

```python
metric_input: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat">put_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetMetricStat">reset_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetReturnData">reset_return_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_stat` <a name="put_metric_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat"></a>

```python
def put_metric_stat(
  metric: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric = None,
  period: typing.Union[int, float] = None,
  stat: str = None,
  unit: str = None
) -> None
```

###### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat.parameter.metric"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}.

---

###### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

###### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat.parameter.stat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_metric_stat` <a name="reset_metric_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetMetricStat"></a>

```python
def reset_metric_stat() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_return_data` <a name="reset_return_data" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetReturnData"></a>

```python
def reset_return_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStatInput">metric_stat_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnDataInput">return_data_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData">return_data</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat"></a>

```python
metric_stat: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `metric_stat_input`<sup>Optional</sup> <a name="metric_stat_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStatInput"></a>

```python
metric_stat_input: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data_input`<sup>Optional</sup> <a name="return_data_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnDataInput"></a>

```python
return_data_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData"></a>

```python
return_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries">put_metric_data_queries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resetMetricDataQueries">reset_metric_data_queries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_data_queries` <a name="put_metric_data_queries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries"></a>

```python
def put_metric_data_queries(
  value: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]

---

##### `reset_metric_data_queries` <a name="reset_metric_data_queries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resetMetricDataQueries"></a>

```python
def reset_metric_data_queries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries">metric_data_queries</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueriesInput">metric_data_queries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries"></a>

```python
metric_data_queries: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a>

---

##### `metric_data_queries_input`<sup>Optional</sup> <a name="metric_data_queries_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueriesInput"></a>

```python
metric_data_queries_input: IResolvable | typing.List[CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetector
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_anomaly_detector

cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetStat">reset_stat</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_stat` <a name="reset_stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetStat"></a>

```python
def reset_stat() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions"></a>

```python
dimensions: CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetector
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---



