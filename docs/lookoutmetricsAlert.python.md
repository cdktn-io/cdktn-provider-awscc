# `lookoutmetricsAlert` Submodule <a name="`lookoutmetricsAlert` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAlert <a name="LookoutmetricsAlert" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert awscc_lookoutmetrics_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlert(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: LookoutmetricsAlertAction,
  alert_sensitivity_threshold: typing.Union[int, float],
  anomaly_detector_arn: str,
  alert_description: str = None,
  alert_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | The action to be taken by the alert when an anomaly is detected. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertSensitivityThreshold">alert_sensitivity_threshold</a></code> | <code>typing.Union[int, float]</code> | A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.anomalyDetectorArn">anomaly_detector_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) of the Anomaly Detector to alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertDescription">alert_description</a></code> | <code>str</code> | A description for the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertName">alert_name</a></code> | <code>str</code> | The name of the alert. If not provided, a name is generated automatically. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

The action to be taken by the alert when an anomaly is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#action LookoutmetricsAlert#action}

---

##### `alert_sensitivity_threshold`<sup>Required</sup> <a name="alert_sensitivity_threshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertSensitivityThreshold"></a>

- *Type:* typing.Union[int, float]

A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}

---

##### `anomaly_detector_arn`<sup>Required</sup> <a name="anomaly_detector_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.anomalyDetectorArn"></a>

- *Type:* str

The Amazon resource name (ARN) of the Anomaly Detector to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}

---

##### `alert_description`<sup>Optional</sup> <a name="alert_description" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertDescription"></a>

- *Type:* str

A description for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_description LookoutmetricsAlert#alert_description}

---

##### `alert_name`<sup>Optional</sup> <a name="alert_name" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertName"></a>

- *Type:* str

The name of the alert. If not provided, a name is generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_name LookoutmetricsAlert#alert_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription">reset_alert_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName">reset_alert_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction"></a>

```python
def put_action(
  lambda_configuration: LookoutmetricsAlertActionLambdaConfiguration = None,
  sns_configuration: LookoutmetricsAlertActionSnsConfiguration = None
) -> None
```

###### `lambda_configuration`<sup>Optional</sup> <a name="lambda_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction.parameter.lambdaConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

Configuration options for a Lambda alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#lambda_configuration LookoutmetricsAlert#lambda_configuration}

---

###### `sns_configuration`<sup>Optional</sup> <a name="sns_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction.parameter.snsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

Configuration options for an SNS alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#sns_configuration LookoutmetricsAlert#sns_configuration}

---

##### `reset_alert_description` <a name="reset_alert_description" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription"></a>

```python
def reset_alert_description() -> None
```

##### `reset_alert_name` <a name="reset_alert_name" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName"></a>

```python
def reset_alert_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LookoutmetricsAlert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LookoutmetricsAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput">alert_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput">alert_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput">alert_sensitivity_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput">anomaly_detector_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription">alert_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName">alert_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold">alert_sensitivity_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn">anomaly_detector_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action"></a>

```python
action: LookoutmetricsAlertActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput"></a>

```python
action_input: IResolvable | LookoutmetricsAlertAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `alert_description_input`<sup>Optional</sup> <a name="alert_description_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput"></a>

```python
alert_description_input: str
```

- *Type:* str

---

##### `alert_name_input`<sup>Optional</sup> <a name="alert_name_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput"></a>

```python
alert_name_input: str
```

- *Type:* str

---

##### `alert_sensitivity_threshold_input`<sup>Optional</sup> <a name="alert_sensitivity_threshold_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput"></a>

```python
alert_sensitivity_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anomaly_detector_arn_input`<sup>Optional</sup> <a name="anomaly_detector_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput"></a>

```python
anomaly_detector_arn_input: str
```

- *Type:* str

---

##### `alert_description`<sup>Required</sup> <a name="alert_description" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription"></a>

```python
alert_description: str
```

- *Type:* str

---

##### `alert_name`<sup>Required</sup> <a name="alert_name" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName"></a>

```python
alert_name: str
```

- *Type:* str

---

##### `alert_sensitivity_threshold`<sup>Required</sup> <a name="alert_sensitivity_threshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold"></a>

```python
alert_sensitivity_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anomaly_detector_arn`<sup>Required</sup> <a name="anomaly_detector_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn"></a>

```python
anomaly_detector_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAlertAction <a name="LookoutmetricsAlertAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertAction(
  lambda_configuration: LookoutmetricsAlertActionLambdaConfiguration = None,
  sns_configuration: LookoutmetricsAlertActionSnsConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration">lambda_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | Configuration options for a Lambda alert action. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration">sns_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | Configuration options for an SNS alert action. |

---

##### `lambda_configuration`<sup>Optional</sup> <a name="lambda_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration"></a>

```python
lambda_configuration: LookoutmetricsAlertActionLambdaConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

Configuration options for a Lambda alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#lambda_configuration LookoutmetricsAlert#lambda_configuration}

---

##### `sns_configuration`<sup>Optional</sup> <a name="sns_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration"></a>

```python
sns_configuration: LookoutmetricsAlertActionSnsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

Configuration options for an SNS alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#sns_configuration LookoutmetricsAlert#sns_configuration}

---

### LookoutmetricsAlertActionLambdaConfiguration <a name="LookoutmetricsAlertActionLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration(
  lambda_arn: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | ARN of a Lambda to send alert notifications to. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of an IAM role that LookoutMetrics should assume to access the Lambda function. |

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

ARN of a Lambda to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#lambda_arn LookoutmetricsAlert#lambda_arn}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

### LookoutmetricsAlertActionSnsConfiguration <a name="LookoutmetricsAlertActionSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration(
  role_arn: str = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of an IAM role that LookoutMetrics should assume to access the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | ARN of an SNS topic to send alert notifications to. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

ARN of an SNS topic to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#sns_topic_arn LookoutmetricsAlert#sns_topic_arn}

---

### LookoutmetricsAlertConfig <a name="LookoutmetricsAlertConfig" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: LookoutmetricsAlertAction,
  alert_sensitivity_threshold: typing.Union[int, float],
  anomaly_detector_arn: str,
  alert_description: str = None,
  alert_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | The action to be taken by the alert when an anomaly is detected. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold">alert_sensitivity_threshold</a></code> | <code>typing.Union[int, float]</code> | A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn">anomaly_detector_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) of the Anomaly Detector to alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription">alert_description</a></code> | <code>str</code> | A description for the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName">alert_name</a></code> | <code>str</code> | The name of the alert. If not provided, a name is generated automatically. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action"></a>

```python
action: LookoutmetricsAlertAction
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

The action to be taken by the alert when an anomaly is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#action LookoutmetricsAlert#action}

---

##### `alert_sensitivity_threshold`<sup>Required</sup> <a name="alert_sensitivity_threshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold"></a>

```python
alert_sensitivity_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}

---

##### `anomaly_detector_arn`<sup>Required</sup> <a name="anomaly_detector_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn"></a>

```python
anomaly_detector_arn: str
```

- *Type:* str

The Amazon resource name (ARN) of the Anomaly Detector to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}

---

##### `alert_description`<sup>Optional</sup> <a name="alert_description" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription"></a>

```python
alert_description: str
```

- *Type:* str

A description for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_description LookoutmetricsAlert#alert_description}

---

##### `alert_name`<sup>Optional</sup> <a name="alert_name" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName"></a>

```python
alert_name: str
```

- *Type:* str

The name of the alert. If not provided, a name is generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_name LookoutmetricsAlert#alert_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAlertActionLambdaConfigurationOutputReference <a name="LookoutmetricsAlertActionLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAlertActionLambdaConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---


### LookoutmetricsAlertActionOutputReference <a name="LookoutmetricsAlertActionOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration">put_lambda_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration">put_sns_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration">reset_lambda_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration">reset_sns_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_configuration` <a name="put_lambda_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration"></a>

```python
def put_lambda_configuration(
  lambda_arn: str = None,
  role_arn: str = None
) -> None
```

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration.parameter.lambdaArn"></a>

- *Type:* str

ARN of a Lambda to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#lambda_arn LookoutmetricsAlert#lambda_arn}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration.parameter.roleArn"></a>

- *Type:* str

ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

##### `put_sns_configuration` <a name="put_sns_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration"></a>

```python
def put_sns_configuration(
  role_arn: str = None,
  sns_topic_arn: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration.parameter.roleArn"></a>

- *Type:* str

ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

###### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration.parameter.snsTopicArn"></a>

- *Type:* str

ARN of an SNS topic to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#sns_topic_arn LookoutmetricsAlert#sns_topic_arn}

---

##### `reset_lambda_configuration` <a name="reset_lambda_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration"></a>

```python
def reset_lambda_configuration() -> None
```

##### `reset_sns_configuration` <a name="reset_sns_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration"></a>

```python
def reset_sns_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration">lambda_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration">sns_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput">lambda_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput">sns_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_configuration`<sup>Required</sup> <a name="lambda_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration"></a>

```python
lambda_configuration: LookoutmetricsAlertActionLambdaConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a>

---

##### `sns_configuration`<sup>Required</sup> <a name="sns_configuration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration"></a>

```python
sns_configuration: LookoutmetricsAlertActionSnsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a>

---

##### `lambda_configuration_input`<sup>Optional</sup> <a name="lambda_configuration_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput"></a>

```python
lambda_configuration_input: IResolvable | LookoutmetricsAlertActionLambdaConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `sns_configuration_input`<sup>Optional</sup> <a name="sns_configuration_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput"></a>

```python
sns_configuration_input: IResolvable | LookoutmetricsAlertActionSnsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAlertAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---


### LookoutmetricsAlertActionSnsConfigurationOutputReference <a name="LookoutmetricsAlertActionSnsConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lookoutmetrics_alert

lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LookoutmetricsAlertActionSnsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---



