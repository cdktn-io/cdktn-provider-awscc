# `personalizeMetricAttribution` Submodule <a name="`personalizeMetricAttribution` Submodule" id="@cdktn/provider-awscc.personalizeMetricAttribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeMetricAttribution <a name="PersonalizeMetricAttribution" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution awscc_personalize_metric_attribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttribution(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  metrics: IResolvable | typing.List[PersonalizeMetricAttributionMetrics],
  metrics_output_config: PersonalizeMetricAttributionMetricsOutputConfig,
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The ARN of the destination dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metrics">metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]</code> | A list of metric attributes for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metricsOutputConfig">metrics_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | The output configuration details for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the metric attribution. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.datasetGroupArn"></a>

- *Type:* str

The ARN of the destination dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metrics"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]

A list of metric attributes for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}

---

##### `metrics_output_config`<sup>Required</sup> <a name="metrics_output_config" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metricsOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

The output configuration details for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.name"></a>

- *Type:* str

The name of the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig">put_metrics_output_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metrics` <a name="put_metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics"></a>

```python
def put_metrics(
  value: IResolvable | typing.List[PersonalizeMetricAttributionMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]

---

##### `put_metrics_output_config` <a name="put_metrics_output_config" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig"></a>

```python
def put_metrics_output_config(
  role_arn: str,
  s3_data_destination: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#role_arn PersonalizeMetricAttribution#role_arn}

---

###### `s3_data_destination`<sup>Optional</sup> <a name="s3_data_destination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig.parameter.s3DataDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

The configuration details of an Amazon S3 output bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#s3_data_destination PersonalizeMetricAttribution#s3_data_destination}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttribution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttribution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttribution.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttribution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PersonalizeMetricAttribution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PersonalizeMetricAttribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeMetricAttribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn">metric_attribution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig">metrics_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput">dataset_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput">metrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput">metrics_output_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_attribution_arn`<sup>Required</sup> <a name="metric_attribution_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn"></a>

```python
metric_attribution_arn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics"></a>

```python
metrics: PersonalizeMetricAttributionMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a>

---

##### `metrics_output_config`<sup>Required</sup> <a name="metrics_output_config" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig"></a>

```python
metrics_output_config: PersonalizeMetricAttributionMetricsOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `dataset_group_arn_input`<sup>Optional</sup> <a name="dataset_group_arn_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput"></a>

```python
dataset_group_arn_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput"></a>

```python
metrics_input: IResolvable | typing.List[PersonalizeMetricAttributionMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]

---

##### `metrics_output_config_input`<sup>Optional</sup> <a name="metrics_output_config_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput"></a>

```python
metrics_output_config_input: IResolvable | PersonalizeMetricAttributionMetricsOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeMetricAttributionConfig <a name="PersonalizeMetricAttributionConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  metrics: IResolvable | typing.List[PersonalizeMetricAttributionMetrics],
  metrics_output_config: PersonalizeMetricAttributionMetricsOutputConfig,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The ARN of the destination dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics">metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]</code> | A list of metric attributes for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig">metrics_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | The output configuration details for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name">name</a></code> | <code>str</code> | The name of the metric attribution. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

The ARN of the destination dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics"></a>

```python
metrics: IResolvable | typing.List[PersonalizeMetricAttributionMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]

A list of metric attributes for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}

---

##### `metrics_output_config`<sup>Required</sup> <a name="metrics_output_config" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig"></a>

```python
metrics_output_config: PersonalizeMetricAttributionMetricsOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

The output configuration details for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}

---

### PersonalizeMetricAttributionMetrics <a name="PersonalizeMetricAttributionMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetrics(
  event_type: str,
  expression: str,
  metric_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType">event_type</a></code> | <code>str</code> | The metric's event type. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression">expression</a></code> | <code>str</code> | The attribute's expression. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName">metric_name</a></code> | <code>str</code> | The metric's name. |

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

The metric's event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#event_type PersonalizeMetricAttribution#event_type}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression"></a>

```python
expression: str
```

- *Type:* str

The attribute's expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#expression PersonalizeMetricAttribution#expression}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The metric's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metric_name PersonalizeMetricAttribution#metric_name}

---

### PersonalizeMetricAttributionMetricsOutputConfig <a name="PersonalizeMetricAttributionMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig(
  role_arn: str,
  s3_data_destination: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination">s3_data_destination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | The configuration details of an Amazon S3 output bucket. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#role_arn PersonalizeMetricAttribution#role_arn}

---

##### `s3_data_destination`<sup>Optional</sup> <a name="s3_data_destination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination"></a>

```python
s3_data_destination: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

The configuration details of an Amazon S3 output bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#s3_data_destination PersonalizeMetricAttribution#s3_data_destination}

---

### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination(
  kms_key_arn: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path">path</a></code> | <code>str</code> | The file path of the Amazon S3 bucket. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#kms_key_arn PersonalizeMetricAttribution#kms_key_arn}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path"></a>

```python
path: str
```

- *Type:* str

The file path of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#path PersonalizeMetricAttribution#path}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeMetricAttributionMetricsList <a name="PersonalizeMetricAttributionMetricsList" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeMetricAttributionMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeMetricAttributionMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>]

---


### PersonalizeMetricAttributionMetricsOutputConfigOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination">put_s3_data_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination">reset_s3_data_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_data_destination` <a name="put_s3_data_destination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination"></a>

```python
def put_s3_data_destination(
  kms_key_arn: str = None,
  path: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#kms_key_arn PersonalizeMetricAttribution#kms_key_arn}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination.parameter.path"></a>

- *Type:* str

The file path of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#path PersonalizeMetricAttribution#path}

---

##### `reset_s3_data_destination` <a name="reset_s3_data_destination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination"></a>

```python
def reset_s3_data_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination">s3_data_destination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput">s3_data_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_data_destination`<sup>Required</sup> <a name="s3_data_destination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination"></a>

```python
s3_data_destination: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `s3_data_destination_input`<sup>Optional</sup> <a name="s3_data_destination_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput"></a>

```python
s3_data_destination_input: IResolvable | PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeMetricAttributionMetricsOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---


### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---


### PersonalizeMetricAttributionMetricsOutputReference <a name="PersonalizeMetricAttributionMetricsOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_metric_attribution

personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeMetricAttributionMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>

---



