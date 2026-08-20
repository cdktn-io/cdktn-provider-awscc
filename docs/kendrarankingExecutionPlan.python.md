# `kendrarankingExecutionPlan` Submodule <a name="`kendrarankingExecutionPlan` Submodule" id="@cdktn/provider-awscc.kendrarankingExecutionPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendrarankingExecutionPlan <a name="KendrarankingExecutionPlan" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan awscc_kendraranking_execution_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  capacity_units: KendrarankingExecutionPlanCapacityUnits = None,
  description: str = None,
  tags: IResolvable | typing.List[KendrarankingExecutionPlanTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of kendra ranking rescore execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]</code> | Tags for labeling the execution plan. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.name"></a>

- *Type:* str

Name of kendra ranking rescore execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#name KendrarankingExecutionPlan#name}

---

##### `capacity_units`<sup>Optional</sup> <a name="capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.capacityUnits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#capacity_units KendrarankingExecutionPlan#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.description"></a>

- *Type:* str

A description for the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#description KendrarankingExecutionPlan#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]

Tags for labeling the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#tags KendrarankingExecutionPlan#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits">put_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetCapacityUnits">reset_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_units` <a name="put_capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits"></a>

```python
def put_capacity_units(
  rescore_capacity_units: typing.Union[int, float] = None
) -> None
```

###### `rescore_capacity_units`<sup>Optional</sup> <a name="rescore_capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits.parameter.rescoreCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KendrarankingExecutionPlanTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]

---

##### `reset_capacity_units` <a name="reset_capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetCapacityUnits"></a>

```python
def reset_capacity_units() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KendrarankingExecutionPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KendrarankingExecutionPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KendrarankingExecutionPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference">KendrarankingExecutionPlanCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.executionPlanId">execution_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList">KendrarankingExecutionPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnitsInput">capacity_units_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnits"></a>

```python
capacity_units: KendrarankingExecutionPlanCapacityUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference">KendrarankingExecutionPlanCapacityUnitsOutputReference</a>

---

##### `execution_plan_id`<sup>Required</sup> <a name="execution_plan_id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.executionPlanId"></a>

```python
execution_plan_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tags"></a>

```python
tags: KendrarankingExecutionPlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList">KendrarankingExecutionPlanTagsList</a>

---

##### `capacity_units_input`<sup>Optional</sup> <a name="capacity_units_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnitsInput"></a>

```python
capacity_units_input: IResolvable | KendrarankingExecutionPlanCapacityUnits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KendrarankingExecutionPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KendrarankingExecutionPlanCapacityUnits <a name="KendrarankingExecutionPlanCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits(
  rescore_capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.property.rescoreCapacityUnits">rescore_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}. |

---

##### `rescore_capacity_units`<sup>Optional</sup> <a name="rescore_capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.property.rescoreCapacityUnits"></a>

```python
rescore_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}.

---

### KendrarankingExecutionPlanConfig <a name="KendrarankingExecutionPlanConfig" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  capacity_units: KendrarankingExecutionPlanCapacityUnits = None,
  description: str = None,
  tags: IResolvable | typing.List[KendrarankingExecutionPlanTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.name">name</a></code> | <code>str</code> | Name of kendra ranking rescore execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.description">description</a></code> | <code>str</code> | A description for the execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]</code> | Tags for labeling the execution plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of kendra ranking rescore execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#name KendrarankingExecutionPlan#name}

---

##### `capacity_units`<sup>Optional</sup> <a name="capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.capacityUnits"></a>

```python
capacity_units: KendrarankingExecutionPlanCapacityUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#capacity_units KendrarankingExecutionPlan#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#description KendrarankingExecutionPlan#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KendrarankingExecutionPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]

Tags for labeling the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#tags KendrarankingExecutionPlan#tags}

---

### KendrarankingExecutionPlanTags <a name="KendrarankingExecutionPlanTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlanTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.value">value</a></code> | <code>str</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#key KendrarankingExecutionPlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kendraranking_execution_plan#value KendrarankingExecutionPlan#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendrarankingExecutionPlanCapacityUnitsOutputReference <a name="KendrarankingExecutionPlanCapacityUnitsOutputReference" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resetRescoreCapacityUnits">reset_rescore_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rescore_capacity_units` <a name="reset_rescore_capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resetRescoreCapacityUnits"></a>

```python
def reset_rescore_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnitsInput">rescore_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits">rescore_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rescore_capacity_units_input`<sup>Optional</sup> <a name="rescore_capacity_units_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnitsInput"></a>

```python
rescore_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rescore_capacity_units`<sup>Required</sup> <a name="rescore_capacity_units" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits"></a>

```python
rescore_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendrarankingExecutionPlanCapacityUnits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---


### KendrarankingExecutionPlanTagsList <a name="KendrarankingExecutionPlanTagsList" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendrarankingExecutionPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendrarankingExecutionPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>]

---


### KendrarankingExecutionPlanTagsOutputReference <a name="KendrarankingExecutionPlanTagsOutputReference" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendraranking_execution_plan

kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendrarankingExecutionPlanTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>

---



