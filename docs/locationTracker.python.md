# `locationTracker` Submodule <a name="`locationTracker` Submodule" id="@cdktn/provider-awscc.locationTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationTracker <a name="LocationTracker" id="@cdktn/provider-awscc.locationTracker.LocationTracker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker awscc_location_tracker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTracker(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  tracker_name: str,
  description: str = None,
  event_bridge_enabled: bool | IResolvable = None,
  kms_key_enable_geospatial_queries: bool | IResolvable = None,
  kms_key_id: str = None,
  position_filtering: str = None,
  pricing_plan: str = None,
  pricing_plan_data_source: str = None,
  tags: IResolvable | typing.List[LocationTrackerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.trackerName">tracker_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#tracker_name LocationTracker#tracker_name}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#description LocationTracker#description}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.eventBridgeEnabled">event_bridge_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#event_bridge_enabled LocationTracker#event_bridge_enabled}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.kmsKeyEnableGeospatialQueries">kms_key_enable_geospatial_queries</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_enable_geospatial_queries LocationTracker#kms_key_enable_geospatial_queries}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_id LocationTracker#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.positionFiltering">position_filtering</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#position_filtering LocationTracker#position_filtering}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.pricingPlan">pricing_plan</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#pricing_plan LocationTracker#pricing_plan}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.pricingPlanDataSource">pricing_plan_data_source</a></code> | <code>str</code> | This shape is deprecated since 2022-02-01: Deprecated. No longer allowed. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `tracker_name`<sup>Required</sup> <a name="tracker_name" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.trackerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#tracker_name LocationTracker#tracker_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#description LocationTracker#description}.

---

##### `event_bridge_enabled`<sup>Optional</sup> <a name="event_bridge_enabled" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.eventBridgeEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#event_bridge_enabled LocationTracker#event_bridge_enabled}.

---

##### `kms_key_enable_geospatial_queries`<sup>Optional</sup> <a name="kms_key_enable_geospatial_queries" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.kmsKeyEnableGeospatialQueries"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_enable_geospatial_queries LocationTracker#kms_key_enable_geospatial_queries}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_id LocationTracker#kms_key_id}.

---

##### `position_filtering`<sup>Optional</sup> <a name="position_filtering" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.positionFiltering"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#position_filtering LocationTracker#position_filtering}.

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.pricingPlan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#pricing_plan LocationTracker#pricing_plan}.

---

##### `pricing_plan_data_source`<sup>Optional</sup> <a name="pricing_plan_data_source" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.pricingPlanDataSource"></a>

- *Type:* str

This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#pricing_plan_data_source LocationTracker#pricing_plan_data_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#tags LocationTracker#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetEventBridgeEnabled">reset_event_bridge_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyEnableGeospatialQueries">reset_kms_key_enable_geospatial_queries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetPositionFiltering">reset_position_filtering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlan">reset_pricing_plan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlanDataSource">reset_pricing_plan_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.locationTracker.LocationTracker.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.locationTracker.LocationTracker.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.locationTracker.LocationTracker.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LocationTrackerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationTracker.LocationTracker.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_bridge_enabled` <a name="reset_event_bridge_enabled" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetEventBridgeEnabled"></a>

```python
def reset_event_bridge_enabled() -> None
```

##### `reset_kms_key_enable_geospatial_queries` <a name="reset_kms_key_enable_geospatial_queries" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyEnableGeospatialQueries"></a>

```python
def reset_kms_key_enable_geospatial_queries() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_position_filtering` <a name="reset_position_filtering" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetPositionFiltering"></a>

```python
def reset_position_filtering() -> None
```

##### `reset_pricing_plan` <a name="reset_pricing_plan" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlan"></a>

```python
def reset_pricing_plan() -> None
```

##### `reset_pricing_plan_data_source` <a name="reset_pricing_plan_data_source" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlanDataSource"></a>

```python
def reset_pricing_plan_data_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LocationTracker resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isConstruct"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTracker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformElement"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTracker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformResource"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTracker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTracker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LocationTracker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LocationTracker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LocationTracker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LocationTracker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList">LocationTrackerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerArn">tracker_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabledInput">event_bridge_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueriesInput">kms_key_enable_geospatial_queries_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFilteringInput">position_filtering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSourceInput">pricing_plan_data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanInput">pricing_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerNameInput">tracker_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabled">event_bridge_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueries">kms_key_enable_geospatial_queries</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFiltering">position_filtering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSource">pricing_plan_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerName">tracker_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.tags"></a>

```python
tags: LocationTrackerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList">LocationTrackerTagsList</a>

---

##### `tracker_arn`<sup>Required</sup> <a name="tracker_arn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerArn"></a>

```python
tracker_arn: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_bridge_enabled_input`<sup>Optional</sup> <a name="event_bridge_enabled_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabledInput"></a>

```python
event_bridge_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_enable_geospatial_queries_input`<sup>Optional</sup> <a name="kms_key_enable_geospatial_queries_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueriesInput"></a>

```python
kms_key_enable_geospatial_queries_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `position_filtering_input`<sup>Optional</sup> <a name="position_filtering_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFilteringInput"></a>

```python
position_filtering_input: str
```

- *Type:* str

---

##### `pricing_plan_data_source_input`<sup>Optional</sup> <a name="pricing_plan_data_source_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSourceInput"></a>

```python
pricing_plan_data_source_input: str
```

- *Type:* str

---

##### `pricing_plan_input`<sup>Optional</sup> <a name="pricing_plan_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanInput"></a>

```python
pricing_plan_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LocationTrackerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]

---

##### `tracker_name_input`<sup>Optional</sup> <a name="tracker_name_input" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerNameInput"></a>

```python
tracker_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_bridge_enabled`<sup>Required</sup> <a name="event_bridge_enabled" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabled"></a>

```python
event_bridge_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_enable_geospatial_queries`<sup>Required</sup> <a name="kms_key_enable_geospatial_queries" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueries"></a>

```python
kms_key_enable_geospatial_queries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `position_filtering`<sup>Required</sup> <a name="position_filtering" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFiltering"></a>

```python
position_filtering: str
```

- *Type:* str

---

##### `pricing_plan`<sup>Required</sup> <a name="pricing_plan" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

---

##### `pricing_plan_data_source`<sup>Required</sup> <a name="pricing_plan_data_source" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSource"></a>

```python
pricing_plan_data_source: str
```

- *Type:* str

---

##### `tracker_name`<sup>Required</sup> <a name="tracker_name" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerName"></a>

```python
tracker_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LocationTrackerConfig <a name="LocationTrackerConfig" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTrackerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  tracker_name: str,
  description: str = None,
  event_bridge_enabled: bool | IResolvable = None,
  kms_key_enable_geospatial_queries: bool | IResolvable = None,
  kms_key_id: str = None,
  position_filtering: str = None,
  pricing_plan: str = None,
  pricing_plan_data_source: str = None,
  tags: IResolvable | typing.List[LocationTrackerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.trackerName">tracker_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#tracker_name LocationTracker#tracker_name}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#description LocationTracker#description}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.eventBridgeEnabled">event_bridge_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#event_bridge_enabled LocationTracker#event_bridge_enabled}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyEnableGeospatialQueries">kms_key_enable_geospatial_queries</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_enable_geospatial_queries LocationTracker#kms_key_enable_geospatial_queries}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_id LocationTracker#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.positionFiltering">position_filtering</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#position_filtering LocationTracker#position_filtering}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#pricing_plan LocationTracker#pricing_plan}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlanDataSource">pricing_plan_data_source</a></code> | <code>str</code> | This shape is deprecated since 2022-02-01: Deprecated. No longer allowed. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `tracker_name`<sup>Required</sup> <a name="tracker_name" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.trackerName"></a>

```python
tracker_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#tracker_name LocationTracker#tracker_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#description LocationTracker#description}.

---

##### `event_bridge_enabled`<sup>Optional</sup> <a name="event_bridge_enabled" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.eventBridgeEnabled"></a>

```python
event_bridge_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#event_bridge_enabled LocationTracker#event_bridge_enabled}.

---

##### `kms_key_enable_geospatial_queries`<sup>Optional</sup> <a name="kms_key_enable_geospatial_queries" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyEnableGeospatialQueries"></a>

```python
kms_key_enable_geospatial_queries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_enable_geospatial_queries LocationTracker#kms_key_enable_geospatial_queries}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#kms_key_id LocationTracker#kms_key_id}.

---

##### `position_filtering`<sup>Optional</sup> <a name="position_filtering" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.positionFiltering"></a>

```python
position_filtering: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#position_filtering LocationTracker#position_filtering}.

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#pricing_plan LocationTracker#pricing_plan}.

---

##### `pricing_plan_data_source`<sup>Optional</sup> <a name="pricing_plan_data_source" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlanDataSource"></a>

```python
pricing_plan_data_source: str
```

- *Type:* str

This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#pricing_plan_data_source LocationTracker#pricing_plan_data_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LocationTrackerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#tags LocationTracker#tags}

---

### LocationTrackerTags <a name="LocationTrackerTags" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags.Initializer"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTrackerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#key LocationTracker#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/location_tracker#value LocationTracker#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LocationTrackerTagsList <a name="LocationTrackerTagsList" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTrackerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LocationTrackerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LocationTrackerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>]

---


### LocationTrackerTagsOutputReference <a name="LocationTrackerTagsOutputReference" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import location_tracker

locationTracker.LocationTrackerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LocationTrackerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags">LocationTrackerTags</a>

---



