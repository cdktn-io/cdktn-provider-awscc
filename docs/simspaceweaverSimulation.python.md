# `simspaceweaverSimulation` Submodule <a name="`simspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.simspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimspaceweaverSimulation <a name="SimspaceweaverSimulation" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulation(
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
  role_arn: str,
  maximum_duration: str = None,
  schema_s3_location: SimspaceweaverSimulationSchemaS3Location = None,
  snapshot_s3_location: SimspaceweaverSimulationSnapshotS3Location = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.maximumDuration">maximum_duration</a></code> | <code>str</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.schemaS3Location">schema_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.snapshotS3Location">snapshot_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.name"></a>

- *Type:* str

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.roleArn"></a>

- *Type:* str

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.maximumDuration"></a>

- *Type:* str

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `schema_s3_location`<sup>Optional</sup> <a name="schema_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.schemaS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `snapshot_s3_location`<sup>Optional</sup> <a name="snapshot_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.snapshotS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location">put_schema_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location">put_snapshot_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration">reset_maximum_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location">reset_schema_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location">reset_snapshot_s3_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema_s3_location` <a name="put_schema_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location"></a>

```python
def put_schema_s3_location(
  bucket_name: str = None,
  object_key: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location.parameter.bucketName"></a>

- *Type:* str

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

###### `object_key`<sup>Optional</sup> <a name="object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location.parameter.objectKey"></a>

- *Type:* str

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

##### `put_snapshot_s3_location` <a name="put_snapshot_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location"></a>

```python
def put_snapshot_s3_location(
  bucket_name: str = None,
  object_key: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location.parameter.bucketName"></a>

- *Type:* str

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

###### `object_key`<sup>Optional</sup> <a name="object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location.parameter.objectKey"></a>

- *Type:* str

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

##### `reset_maximum_duration` <a name="reset_maximum_duration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration"></a>

```python
def reset_maximum_duration() -> None
```

##### `reset_schema_s3_location` <a name="reset_schema_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location"></a>

```python
def reset_schema_s3_location() -> None
```

##### `reset_snapshot_s3_location` <a name="reset_snapshot_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location"></a>

```python
def reset_snapshot_s3_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SimspaceweaverSimulation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload">describe_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location">schema_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location">snapshot_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput">maximum_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput">schema_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput">snapshot_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_payload`<sup>Required</sup> <a name="describe_payload" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload"></a>

```python
describe_payload: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_s3_location`<sup>Required</sup> <a name="schema_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location"></a>

```python
schema_s3_location: SimspaceweaverSimulationSchemaS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `snapshot_s3_location`<sup>Required</sup> <a name="snapshot_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location"></a>

```python
snapshot_s3_location: SimspaceweaverSimulationSnapshotS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `maximum_duration_input`<sup>Optional</sup> <a name="maximum_duration_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput"></a>

```python
maximum_duration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `schema_s3_location_input`<sup>Optional</sup> <a name="schema_s3_location_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput"></a>

```python
schema_s3_location_input: IResolvable | SimspaceweaverSimulationSchemaS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `snapshot_s3_location_input`<sup>Optional</sup> <a name="snapshot_s3_location_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput"></a>

```python
snapshot_s3_location_input: IResolvable | SimspaceweaverSimulationSnapshotS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `maximum_duration`<sup>Required</sup> <a name="maximum_duration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SimspaceweaverSimulationConfig <a name="SimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arn: str,
  maximum_duration: str = None,
  schema_s3_location: SimspaceweaverSimulationSchemaS3Location = None,
  snapshot_s3_location: SimspaceweaverSimulationSnapshotS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name">name</a></code> | <code>str</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location">schema_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location">snapshot_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `schema_s3_location`<sup>Optional</sup> <a name="schema_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location"></a>

```python
schema_s3_location: SimspaceweaverSimulationSchemaS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `snapshot_s3_location`<sup>Optional</sup> <a name="snapshot_s3_location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location"></a>

```python
snapshot_s3_location: SimspaceweaverSimulationSnapshotS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

### SimspaceweaverSimulationSchemaS3Location <a name="SimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location(
  bucket_name: str = None,
  object_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName">bucket_name</a></code> | <code>str</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey">object_key</a></code> | <code>str</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `object_key`<sup>Optional</sup> <a name="object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

### SimspaceweaverSimulationSnapshotS3Location <a name="SimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location(
  bucket_name: str = None,
  object_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName">bucket_name</a></code> | <code>str</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey">object_key</a></code> | <code>str</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `object_key`<sup>Optional</sup> <a name="object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

## Classes <a name="Classes" id="Classes"></a>

### SimspaceweaverSimulationSchemaS3LocationOutputReference <a name="SimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey">reset_object_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_object_key` <a name="reset_object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey"></a>

```python
def reset_object_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput">object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `object_key_input`<sup>Optional</sup> <a name="object_key_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput"></a>

```python
object_key_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SimspaceweaverSimulationSchemaS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---


### SimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="SimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import simspaceweaver_simulation

simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey">reset_object_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_object_key` <a name="reset_object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey"></a>

```python
def reset_object_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput">object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `object_key_input`<sup>Optional</sup> <a name="object_key_input" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput"></a>

```python
object_key_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SimspaceweaverSimulationSnapshotS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---



