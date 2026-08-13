# `apsAnomalyDetector` Submodule <a name="`apsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.apsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsAnomalyDetector <a name="ApsAnomalyDetector" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  configuration: ApsAnomalyDetectorConfiguration,
  workspace: str,
  evaluation_interval_in_seconds: typing.Union[int, float] = None,
  labels: IResolvable | typing.List[ApsAnomalyDetectorLabels] = None,
  missing_data_action: ApsAnomalyDetectorMissingDataAction = None,
  tags: IResolvable | typing.List[ApsAnomalyDetectorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.alias">alias</a></code> | <code>str</code> | The AnomalyDetector alias. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | Determines the anomaly detector's algorithm and its configuration. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.workspace">workspace</a></code> | <code>str</code> | Required to identify a specific APS Workspace associated with this Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.evaluationIntervalInSeconds">evaluation_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The AnomalyDetector period of detection and metric generation. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.labels">labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]</code> | An array of key-value pairs to provide meta-data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.missingDataAction">missing_data_action</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | The action to perform when running the expression returns no data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.alias"></a>

- *Type:* str

The AnomalyDetector alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#alias ApsAnomalyDetector#alias}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

Determines the anomaly detector's algorithm and its configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#configuration ApsAnomalyDetector#configuration}

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.workspace"></a>

- *Type:* str

Required to identify a specific APS Workspace associated with this Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#workspace ApsAnomalyDetector#workspace}

---

##### `evaluation_interval_in_seconds`<sup>Optional</sup> <a name="evaluation_interval_in_seconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.evaluationIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

The AnomalyDetector period of detection and metric generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#evaluation_interval_in_seconds ApsAnomalyDetector#evaluation_interval_in_seconds}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.labels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]

An array of key-value pairs to provide meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#labels ApsAnomalyDetector#labels}

---

##### `missing_data_action`<sup>Optional</sup> <a name="missing_data_action" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.missingDataAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

The action to perform when running the expression returns no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#missing_data_action ApsAnomalyDetector#missing_data_action}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#tags ApsAnomalyDetector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction">put_missing_data_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetEvaluationIntervalInSeconds">reset_evaluation_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetMissingDataAction">reset_missing_data_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration"></a>

```python
def put_configuration(
  random_cut_forest: ApsAnomalyDetectorConfigurationRandomCutForest
) -> None
```

###### `random_cut_forest`<sup>Required</sup> <a name="random_cut_forest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration.parameter.randomCutForest"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}.

---

##### `put_labels` <a name="put_labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels"></a>

```python
def put_labels(
  value: IResolvable | typing.List[ApsAnomalyDetectorLabels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]

---

##### `put_missing_data_action` <a name="put_missing_data_action" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction"></a>

```python
def put_missing_data_action(
  mark_as_anomaly: bool | IResolvable = None,
  skip: bool | IResolvable = None
) -> None
```

###### `mark_as_anomaly`<sup>Optional</sup> <a name="mark_as_anomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction.parameter.markAsAnomaly"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}.

---

###### `skip`<sup>Optional</sup> <a name="skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction.parameter.skip"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApsAnomalyDetectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]

---

##### `reset_evaluation_interval_in_seconds` <a name="reset_evaluation_interval_in_seconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetEvaluationIntervalInSeconds"></a>

```python
def reset_evaluation_interval_in_seconds() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_missing_data_action` <a name="reset_missing_data_action" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetMissingDataAction"></a>

```python
def reset_missing_data_action() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApsAnomalyDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference">ApsAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList">ApsAnomalyDetectorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataAction">missing_data_action</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference">ApsAnomalyDetectorMissingDataActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList">ApsAnomalyDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSecondsInput">evaluation_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labelsInput">labels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataActionInput">missing_data_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSeconds">evaluation_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configuration"></a>

```python
configuration: ApsAnomalyDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference">ApsAnomalyDetectorConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labels"></a>

```python
labels: ApsAnomalyDetectorLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList">ApsAnomalyDetectorLabelsList</a>

---

##### `missing_data_action`<sup>Required</sup> <a name="missing_data_action" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataAction"></a>

```python
missing_data_action: ApsAnomalyDetectorMissingDataActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference">ApsAnomalyDetectorMissingDataActionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tags"></a>

```python
tags: ApsAnomalyDetectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList">ApsAnomalyDetectorTagsList</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configurationInput"></a>

```python
configuration_input: IResolvable | ApsAnomalyDetectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

---

##### `evaluation_interval_in_seconds_input`<sup>Optional</sup> <a name="evaluation_interval_in_seconds_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSecondsInput"></a>

```python
evaluation_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labelsInput"></a>

```python
labels_input: IResolvable | typing.List[ApsAnomalyDetectorLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]

---

##### `missing_data_action_input`<sup>Optional</sup> <a name="missing_data_action_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataActionInput"></a>

```python
missing_data_action_input: IResolvable | ApsAnomalyDetectorMissingDataAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApsAnomalyDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `evaluation_interval_in_seconds`<sup>Required</sup> <a name="evaluation_interval_in_seconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSeconds"></a>

```python
evaluation_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApsAnomalyDetectorConfig <a name="ApsAnomalyDetectorConfig" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  configuration: ApsAnomalyDetectorConfiguration,
  workspace: str,
  evaluation_interval_in_seconds: typing.Union[int, float] = None,
  labels: IResolvable | typing.List[ApsAnomalyDetectorLabels] = None,
  missing_data_action: ApsAnomalyDetectorMissingDataAction = None,
  tags: IResolvable | typing.List[ApsAnomalyDetectorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.alias">alias</a></code> | <code>str</code> | The AnomalyDetector alias. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | Determines the anomaly detector's algorithm and its configuration. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.workspace">workspace</a></code> | <code>str</code> | Required to identify a specific APS Workspace associated with this Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.evaluationIntervalInSeconds">evaluation_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The AnomalyDetector period of detection and metric generation. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.labels">labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]</code> | An array of key-value pairs to provide meta-data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.missingDataAction">missing_data_action</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | The action to perform when running the expression returns no data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

The AnomalyDetector alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#alias ApsAnomalyDetector#alias}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.configuration"></a>

```python
configuration: ApsAnomalyDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

Determines the anomaly detector's algorithm and its configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#configuration ApsAnomalyDetector#configuration}

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

Required to identify a specific APS Workspace associated with this Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#workspace ApsAnomalyDetector#workspace}

---

##### `evaluation_interval_in_seconds`<sup>Optional</sup> <a name="evaluation_interval_in_seconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.evaluationIntervalInSeconds"></a>

```python
evaluation_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The AnomalyDetector period of detection and metric generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#evaluation_interval_in_seconds ApsAnomalyDetector#evaluation_interval_in_seconds}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.labels"></a>

```python
labels: IResolvable | typing.List[ApsAnomalyDetectorLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]

An array of key-value pairs to provide meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#labels ApsAnomalyDetector#labels}

---

##### `missing_data_action`<sup>Optional</sup> <a name="missing_data_action" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.missingDataAction"></a>

```python
missing_data_action: ApsAnomalyDetectorMissingDataAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

The action to perform when running the expression returns no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#missing_data_action ApsAnomalyDetector#missing_data_action}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApsAnomalyDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#tags ApsAnomalyDetector#tags}

---

### ApsAnomalyDetectorConfiguration <a name="ApsAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfiguration(
  random_cut_forest: ApsAnomalyDetectorConfigurationRandomCutForest
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.property.randomCutForest">random_cut_forest</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}. |

---

##### `random_cut_forest`<sup>Required</sup> <a name="random_cut_forest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.property.randomCutForest"></a>

```python
random_cut_forest: ApsAnomalyDetectorConfigurationRandomCutForest
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}.

---

### ApsAnomalyDetectorConfigurationRandomCutForest <a name="ApsAnomalyDetectorConfigurationRandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest(
  query: str,
  ignore_near_expected_from_above: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove = None,
  ignore_near_expected_from_below: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow = None,
  sample_size: typing.Union[int, float] = None,
  shingle_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove">ignore_near_expected_from_above</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow">ignore_near_expected_from_below</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.shingleSize">shingle_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}.

---

##### `ignore_near_expected_from_above`<sup>Optional</sup> <a name="ignore_near_expected_from_above" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove"></a>

```python
ignore_near_expected_from_above: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}.

---

##### `ignore_near_expected_from_below`<sup>Optional</sup> <a name="ignore_near_expected_from_below" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow"></a>

```python
ignore_near_expected_from_below: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}.

---

##### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}.

---

##### `shingle_size`<sup>Optional</sup> <a name="shingle_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.shingleSize"></a>

```python
shingle_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}.

---

### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove(
  amount: typing.Union[int, float] = None,
  ratio: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio">ratio</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

##### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio"></a>

```python
ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow(
  amount: typing.Union[int, float] = None,
  ratio: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio">ratio</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

##### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio"></a>

```python
ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

### ApsAnomalyDetectorLabels <a name="ApsAnomalyDetectorLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}

---

### ApsAnomalyDetectorMissingDataAction <a name="ApsAnomalyDetectorMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction(
  mark_as_anomaly: bool | IResolvable = None,
  skip: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.markAsAnomaly">mark_as_anomaly</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.skip">skip</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}. |

---

##### `mark_as_anomaly`<sup>Optional</sup> <a name="mark_as_anomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.markAsAnomaly"></a>

```python
mark_as_anomaly: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}.

---

##### `skip`<sup>Optional</sup> <a name="skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.skip"></a>

```python
skip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}.

---

### ApsAnomalyDetectorTags <a name="ApsAnomalyDetectorTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsAnomalyDetectorConfigurationOutputReference <a name="ApsAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest">put_random_cut_forest</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_random_cut_forest` <a name="put_random_cut_forest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest"></a>

```python
def put_random_cut_forest(
  query: str,
  ignore_near_expected_from_above: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove = None,
  ignore_near_expected_from_below: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow = None,
  sample_size: typing.Union[int, float] = None,
  shingle_size: typing.Union[int, float] = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}.

---

###### `ignore_near_expected_from_above`<sup>Optional</sup> <a name="ignore_near_expected_from_above" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.ignoreNearExpectedFromAbove"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}.

---

###### `ignore_near_expected_from_below`<sup>Optional</sup> <a name="ignore_near_expected_from_below" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.ignoreNearExpectedFromBelow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}.

---

###### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.sampleSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}.

---

###### `shingle_size`<sup>Optional</sup> <a name="shingle_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.shingleSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest">random_cut_forest</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput">random_cut_forest_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `random_cut_forest`<sup>Required</sup> <a name="random_cut_forest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest"></a>

```python
random_cut_forest: ApsAnomalyDetectorConfigurationRandomCutForestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a>

---

##### `random_cut_forest_input`<sup>Optional</sup> <a name="random_cut_forest_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput"></a>

```python
random_cut_forest_input: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

---


### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount">reset_amount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio">reset_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amount` <a name="reset_amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount"></a>

```python
def reset_amount() -> None
```

##### `reset_ratio` <a name="reset_ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio"></a>

```python
def reset_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput">ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio">ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratio_input`<sup>Optional</sup> <a name="ratio_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput"></a>

```python
ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio"></a>

```python
ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---


### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount">reset_amount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio">reset_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amount` <a name="reset_amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount"></a>

```python
def reset_amount() -> None
```

##### `reset_ratio` <a name="reset_ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio"></a>

```python
def reset_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput">ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio">ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratio_input`<sup>Optional</sup> <a name="ratio_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput"></a>

```python
ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio"></a>

```python
ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---


### ApsAnomalyDetectorConfigurationRandomCutForestOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove">put_ignore_near_expected_from_above</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow">put_ignore_near_expected_from_below</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove">reset_ignore_near_expected_from_above</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow">reset_ignore_near_expected_from_below</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize">reset_sample_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize">reset_shingle_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ignore_near_expected_from_above` <a name="put_ignore_near_expected_from_above" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove"></a>

```python
def put_ignore_near_expected_from_above(
  amount: typing.Union[int, float] = None,
  ratio: typing.Union[int, float] = None
) -> None
```

###### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove.parameter.amount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

###### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove.parameter.ratio"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

##### `put_ignore_near_expected_from_below` <a name="put_ignore_near_expected_from_below" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow"></a>

```python
def put_ignore_near_expected_from_below(
  amount: typing.Union[int, float] = None,
  ratio: typing.Union[int, float] = None
) -> None
```

###### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow.parameter.amount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

###### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow.parameter.ratio"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

##### `reset_ignore_near_expected_from_above` <a name="reset_ignore_near_expected_from_above" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove"></a>

```python
def reset_ignore_near_expected_from_above() -> None
```

##### `reset_ignore_near_expected_from_below` <a name="reset_ignore_near_expected_from_below" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow"></a>

```python
def reset_ignore_near_expected_from_below() -> None
```

##### `reset_sample_size` <a name="reset_sample_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize"></a>

```python
def reset_sample_size() -> None
```

##### `reset_shingle_size` <a name="reset_shingle_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize"></a>

```python
def reset_shingle_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove">ignore_near_expected_from_above</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow">ignore_near_expected_from_below</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput">ignore_near_expected_from_above_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput">ignore_near_expected_from_below_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput">sample_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput">shingle_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize">shingle_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_near_expected_from_above`<sup>Required</sup> <a name="ignore_near_expected_from_above" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove"></a>

```python
ignore_near_expected_from_above: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a>

---

##### `ignore_near_expected_from_below`<sup>Required</sup> <a name="ignore_near_expected_from_below" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow"></a>

```python
ignore_near_expected_from_below: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a>

---

##### `ignore_near_expected_from_above_input`<sup>Optional</sup> <a name="ignore_near_expected_from_above_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput"></a>

```python
ignore_near_expected_from_above_input: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---

##### `ignore_near_expected_from_below_input`<sup>Optional</sup> <a name="ignore_near_expected_from_below_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput"></a>

```python
ignore_near_expected_from_below_input: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `sample_size_input`<sup>Optional</sup> <a name="sample_size_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput"></a>

```python
sample_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shingle_size_input`<sup>Optional</sup> <a name="shingle_size_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput"></a>

```python
shingle_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shingle_size`<sup>Required</sup> <a name="shingle_size" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize"></a>

```python
shingle_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

---


### ApsAnomalyDetectorLabelsList <a name="ApsAnomalyDetectorLabelsList" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApsAnomalyDetectorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApsAnomalyDetectorLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>]

---


### ApsAnomalyDetectorLabelsOutputReference <a name="ApsAnomalyDetectorLabelsOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorLabels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>

---


### ApsAnomalyDetectorMissingDataActionOutputReference <a name="ApsAnomalyDetectorMissingDataActionOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly">reset_mark_as_anomaly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetSkip">reset_skip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mark_as_anomaly` <a name="reset_mark_as_anomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly"></a>

```python
def reset_mark_as_anomaly() -> None
```

##### `reset_skip` <a name="reset_skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetSkip"></a>

```python
def reset_skip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput">mark_as_anomaly_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skipInput">skip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly">mark_as_anomaly</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skip">skip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mark_as_anomaly_input`<sup>Optional</sup> <a name="mark_as_anomaly_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput"></a>

```python
mark_as_anomaly_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_input`<sup>Optional</sup> <a name="skip_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skipInput"></a>

```python
skip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mark_as_anomaly`<sup>Required</sup> <a name="mark_as_anomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly"></a>

```python
mark_as_anomaly: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skip"></a>

```python
skip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorMissingDataAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

---


### ApsAnomalyDetectorTagsList <a name="ApsAnomalyDetectorTagsList" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApsAnomalyDetectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApsAnomalyDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>]

---


### ApsAnomalyDetectorTagsOutputReference <a name="ApsAnomalyDetectorTagsOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_anomaly_detector

apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsAnomalyDetectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>

---



