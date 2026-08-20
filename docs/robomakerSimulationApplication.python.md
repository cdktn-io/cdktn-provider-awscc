# `robomakerSimulationApplication` Submodule <a name="`robomakerSimulationApplication` Submodule" id="@cdktn/provider-awscc.robomakerSimulationApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerSimulationApplication <a name="RobomakerSimulationApplication" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application awscc_robomaker_simulation_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  robot_software_suite: RobomakerSimulationApplicationRobotSoftwareSuite,
  simulation_software_suite: RobomakerSimulationApplicationSimulationSoftwareSuite,
  current_revision_id: str = None,
  environment: str = None,
  name: str = None,
  rendering_engine: RobomakerSimulationApplicationRenderingEngine = None,
  sources: IResolvable | typing.List[RobomakerSimulationApplicationSources] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.simulationSoftwareSuite">simulation_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | The simulation software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.currentRevisionId">current_revision_id</a></code> | <code>str</code> | The current revision id. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.renderingEngine">rendering_engine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | The rendering engine for the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]</code> | The sources of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.robotSoftwareSuite"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

The robot software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#robot_software_suite RobomakerSimulationApplication#robot_software_suite}

---

##### `simulation_software_suite`<sup>Required</sup> <a name="simulation_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.simulationSoftwareSuite"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

The simulation software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}

---

##### `current_revision_id`<sup>Optional</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.currentRevisionId"></a>

- *Type:* str

The current revision id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#current_revision_id RobomakerSimulationApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.environment"></a>

- *Type:* str

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#environment RobomakerSimulationApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `rendering_engine`<sup>Optional</sup> <a name="rendering_engine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.renderingEngine"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

The rendering engine for the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#rendering_engine RobomakerSimulationApplication#rendering_engine}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]

The sources of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#sources RobomakerSimulationApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#tags RobomakerSimulationApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine">put_rendering_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite">put_robot_software_suite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite">put_simulation_software_suite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId">reset_current_revision_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine">reset_rendering_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources">reset_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rendering_engine` <a name="put_rendering_engine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine"></a>

```python
def put_rendering_engine(
  name: str = None,
  version: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine.parameter.name"></a>

- *Type:* str

The name of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine.parameter.version"></a>

- *Type:* str

The version of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

##### `put_robot_software_suite` <a name="put_robot_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite"></a>

```python
def put_robot_software_suite(
  name: str,
  version: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite.parameter.name"></a>

- *Type:* str

The name of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite.parameter.version"></a>

- *Type:* str

The version of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

##### `put_simulation_software_suite` <a name="put_simulation_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite"></a>

```python
def put_simulation_software_suite(
  name: str,
  version: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite.parameter.name"></a>

- *Type:* str

The name of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite.parameter.version"></a>

- *Type:* str

The version of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[RobomakerSimulationApplicationSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]

---

##### `reset_current_revision_id` <a name="reset_current_revision_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId"></a>

```python
def reset_current_revision_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_rendering_engine` <a name="reset_rendering_engine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine"></a>

```python
def reset_rendering_engine() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources"></a>

```python
def reset_sources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RobomakerSimulationApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RobomakerSimulationApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerSimulationApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine">rendering_engine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite">simulation_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput">current_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput">rendering_engine_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput">robot_software_suite_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput">simulation_software_suite_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId">current_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rendering_engine`<sup>Required</sup> <a name="rendering_engine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine"></a>

```python
rendering_engine: RobomakerSimulationApplicationRenderingEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a>

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite"></a>

```python
robot_software_suite: RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `simulation_software_suite`<sup>Required</sup> <a name="simulation_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite"></a>

```python
simulation_software_suite: RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources"></a>

```python
sources: RobomakerSimulationApplicationSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a>

---

##### `current_revision_id_input`<sup>Optional</sup> <a name="current_revision_id_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput"></a>

```python
current_revision_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rendering_engine_input`<sup>Optional</sup> <a name="rendering_engine_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput"></a>

```python
rendering_engine_input: IResolvable | RobomakerSimulationApplicationRenderingEngine
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `robot_software_suite_input`<sup>Optional</sup> <a name="robot_software_suite_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput"></a>

```python
robot_software_suite_input: IResolvable | RobomakerSimulationApplicationRobotSoftwareSuite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `simulation_software_suite_input`<sup>Optional</sup> <a name="simulation_software_suite_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput"></a>

```python
simulation_software_suite_input: IResolvable | RobomakerSimulationApplicationSimulationSoftwareSuite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[RobomakerSimulationApplicationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `current_revision_id`<sup>Required</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId"></a>

```python
current_revision_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerSimulationApplicationConfig <a name="RobomakerSimulationApplicationConfig" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  robot_software_suite: RobomakerSimulationApplicationRobotSoftwareSuite,
  simulation_software_suite: RobomakerSimulationApplicationSimulationSoftwareSuite,
  current_revision_id: str = None,
  environment: str = None,
  name: str = None,
  rendering_engine: RobomakerSimulationApplicationRenderingEngine = None,
  sources: IResolvable | typing.List[RobomakerSimulationApplicationSources] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite">simulation_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | The simulation software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId">current_revision_id</a></code> | <code>str</code> | The current revision id. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment">environment</a></code> | <code>str</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine">rendering_engine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | The rendering engine for the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]</code> | The sources of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite"></a>

```python
robot_software_suite: RobomakerSimulationApplicationRobotSoftwareSuite
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

The robot software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#robot_software_suite RobomakerSimulationApplication#robot_software_suite}

---

##### `simulation_software_suite`<sup>Required</sup> <a name="simulation_software_suite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite"></a>

```python
simulation_software_suite: RobomakerSimulationApplicationSimulationSoftwareSuite
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

The simulation software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}

---

##### `current_revision_id`<sup>Optional</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId"></a>

```python
current_revision_id: str
```

- *Type:* str

The current revision id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#current_revision_id RobomakerSimulationApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#environment RobomakerSimulationApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `rendering_engine`<sup>Optional</sup> <a name="rendering_engine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine"></a>

```python
rendering_engine: RobomakerSimulationApplicationRenderingEngine
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

The rendering engine for the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#rendering_engine RobomakerSimulationApplication#rendering_engine}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[RobomakerSimulationApplicationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]

The sources of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#sources RobomakerSimulationApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#tags RobomakerSimulationApplication#tags}

---

### RobomakerSimulationApplicationRenderingEngine <a name="RobomakerSimulationApplicationRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine(
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name">name</a></code> | <code>str</code> | The name of the rendering engine. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version">version</a></code> | <code>str</code> | The version of the rendering engine. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationRobotSoftwareSuite <a name="RobomakerSimulationApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite(
  name: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name">name</a></code> | <code>str</code> | The name of the robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version">version</a></code> | <code>str</code> | The version of the robot software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSimulationSoftwareSuite <a name="RobomakerSimulationApplicationSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite(
  name: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name">name</a></code> | <code>str</code> | The name of the simulation software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version">version</a></code> | <code>str</code> | The version of the simulation software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSources <a name="RobomakerSimulationApplicationSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationSources(
  architecture: str = None,
  s3_bucket: str = None,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture">architecture</a></code> | <code>str</code> | The target processor architecture for the application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | The Amazon S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key">s3_key</a></code> | <code>str</code> | The s3 object key. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

The target processor architecture for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#architecture RobomakerSimulationApplication#architecture}

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

The Amazon S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#s3_bucket RobomakerSimulationApplication#s3_bucket}

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

The s3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application#s3_key RobomakerSimulationApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerSimulationApplicationRenderingEngineOutputReference <a name="RobomakerSimulationApplicationRenderingEngineOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RobomakerSimulationApplicationRenderingEngine
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---


### RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RobomakerSimulationApplicationRobotSoftwareSuite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---


### RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RobomakerSimulationApplicationSimulationSoftwareSuite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---


### RobomakerSimulationApplicationSourcesList <a name="RobomakerSimulationApplicationSourcesList" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RobomakerSimulationApplicationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RobomakerSimulationApplicationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>]

---


### RobomakerSimulationApplicationSourcesOutputReference <a name="RobomakerSimulationApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_simulation_application

robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_architecture` <a name="reset_architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RobomakerSimulationApplicationSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>

---



