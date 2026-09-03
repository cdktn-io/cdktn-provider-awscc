# `athenaCapacityReservation` Submodule <a name="`athenaCapacityReservation` Submodule" id="@cdktn/provider-awscc.athenaCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaCapacityReservation <a name="AthenaCapacityReservation" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation awscc_athena_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservation(
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
  target_dpus: typing.Union[int, float],
  capacity_assignment_configuration: AthenaCapacityReservationCapacityAssignmentConfiguration = None,
  tags: IResolvable | typing.List[AthenaCapacityReservationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.name">name</a></code> | <code>str</code> | The reservation name. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.targetDpus">target_dpus</a></code> | <code>typing.Union[int, float]</code> | The number of DPUs to request to be allocated to the reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.capacityAssignmentConfiguration">capacity_assignment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | Assignment configuration to assign workgroups to a reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.name"></a>

- *Type:* str

The reservation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}

---

##### `target_dpus`<sup>Required</sup> <a name="target_dpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.targetDpus"></a>

- *Type:* typing.Union[int, float]

The number of DPUs to request to be allocated to the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}

---

##### `capacity_assignment_configuration`<sup>Optional</sup> <a name="capacity_assignment_configuration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.capacityAssignmentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

Assignment configuration to assign workgroups to a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration AthenaCapacityReservation#capacity_assignment_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration">put_capacity_assignment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration">reset_capacity_assignment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_assignment_configuration` <a name="put_capacity_assignment_configuration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration"></a>

```python
def put_capacity_assignment_configuration(
  capacity_assignments: IResolvable | typing.List[AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments] = None
) -> None
```

###### `capacity_assignments`<sup>Optional</sup> <a name="capacity_assignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration.parameter.capacityAssignments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]

List of capacity assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#capacity_assignments AthenaCapacityReservation#capacity_assignments}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AthenaCapacityReservationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]

---

##### `reset_capacity_assignment_configuration` <a name="reset_capacity_assignment_configuration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration"></a>

```python
def reset_capacity_assignment_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AthenaCapacityReservation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AthenaCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AthenaCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus">allocated_dpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration">capacity_assignment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime">last_successful_allocation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput">capacity_assignment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput">target_dpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus">target_dpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_dpus`<sup>Required</sup> <a name="allocated_dpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus"></a>

```python
allocated_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_assignment_configuration`<sup>Required</sup> <a name="capacity_assignment_configuration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration"></a>

```python
capacity_assignment_configuration: AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_successful_allocation_time`<sup>Required</sup> <a name="last_successful_allocation_time" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime"></a>

```python
last_successful_allocation_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags"></a>

```python
tags: AthenaCapacityReservationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a>

---

##### `capacity_assignment_configuration_input`<sup>Optional</sup> <a name="capacity_assignment_configuration_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput"></a>

```python
capacity_assignment_configuration_input: IResolvable | AthenaCapacityReservationCapacityAssignmentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AthenaCapacityReservationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]

---

##### `target_dpus_input`<sup>Optional</sup> <a name="target_dpus_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput"></a>

```python
target_dpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_dpus`<sup>Required</sup> <a name="target_dpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus"></a>

```python
target_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaCapacityReservationCapacityAssignmentConfiguration <a name="AthenaCapacityReservationCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration(
  capacity_assignments: IResolvable | typing.List[AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments">capacity_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]</code> | List of capacity assignments. |

---

##### `capacity_assignments`<sup>Optional</sup> <a name="capacity_assignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments"></a>

```python
capacity_assignments: IResolvable | typing.List[AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]

List of capacity assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#capacity_assignments AthenaCapacityReservation#capacity_assignments}

---

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments(
  workgroup_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames">workgroup_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}. |

---

##### `workgroup_names`<sup>Optional</sup> <a name="workgroup_names" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames"></a>

```python
workgroup_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}.

---

### AthenaCapacityReservationConfig <a name="AthenaCapacityReservationConfig" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  target_dpus: typing.Union[int, float],
  capacity_assignment_configuration: AthenaCapacityReservationCapacityAssignmentConfiguration = None,
  tags: IResolvable | typing.List[AthenaCapacityReservationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name">name</a></code> | <code>str</code> | The reservation name. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus">target_dpus</a></code> | <code>typing.Union[int, float]</code> | The number of DPUs to request to be allocated to the reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration">capacity_assignment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | Assignment configuration to assign workgroups to a reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The reservation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}

---

##### `target_dpus`<sup>Required</sup> <a name="target_dpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus"></a>

```python
target_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of DPUs to request to be allocated to the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}

---

##### `capacity_assignment_configuration`<sup>Optional</sup> <a name="capacity_assignment_configuration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration"></a>

```python
capacity_assignment_configuration: AthenaCapacityReservationCapacityAssignmentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

Assignment configuration to assign workgroups to a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration AthenaCapacityReservation#capacity_assignment_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AthenaCapacityReservationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}

---

### AthenaCapacityReservationTags <a name="AthenaCapacityReservationTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]

---


### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames">reset_workgroup_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workgroup_names` <a name="reset_workgroup_names" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames"></a>

```python
def reset_workgroup_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput">workgroup_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames">workgroup_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workgroup_names_input`<sup>Optional</sup> <a name="workgroup_names_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput"></a>

```python
workgroup_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workgroup_names`<sup>Required</sup> <a name="workgroup_names" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames"></a>

```python
workgroup_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>

---


### AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments">put_capacity_assignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments">reset_capacity_assignments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_assignments` <a name="put_capacity_assignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments"></a>

```python
def put_capacity_assignments(
  value: IResolvable | typing.List[AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]

---

##### `reset_capacity_assignments` <a name="reset_capacity_assignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments"></a>

```python
def reset_capacity_assignments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments">capacity_assignments</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput">capacity_assignments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_assignments`<sup>Required</sup> <a name="capacity_assignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments"></a>

```python
capacity_assignments: AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a>

---

##### `capacity_assignments_input`<sup>Optional</sup> <a name="capacity_assignments_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput"></a>

```python
capacity_assignments_input: IResolvable | typing.List[AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaCapacityReservationCapacityAssignmentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---


### AthenaCapacityReservationTagsList <a name="AthenaCapacityReservationTagsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaCapacityReservationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaCapacityReservationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>]

---


### AthenaCapacityReservationTagsOutputReference <a name="AthenaCapacityReservationTagsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_capacity_reservation

athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaCapacityReservationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>

---



