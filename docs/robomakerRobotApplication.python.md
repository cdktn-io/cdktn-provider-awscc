# `robomakerRobotApplication` Submodule <a name="`robomakerRobotApplication` Submodule" id="@cdktn/provider-awscc.robomakerRobotApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerRobotApplication <a name="RobomakerRobotApplication" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application awscc_robomaker_robot_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  robot_software_suite: RobomakerRobotApplicationRobotSoftwareSuite,
  current_revision_id: str = None,
  environment: str = None,
  name: str = None,
  sources: IResolvable | typing.List[RobomakerRobotApplicationSources] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.currentRevisionId">current_revision_id</a></code> | <code>str</code> | The revision ID of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]</code> | The sources of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.robotSoftwareSuite"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

The robot software suite used by the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#robot_software_suite RobomakerRobotApplication#robot_software_suite}

---

##### `current_revision_id`<sup>Optional</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.currentRevisionId"></a>

- *Type:* str

The revision ID of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#current_revision_id RobomakerRobotApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.environment"></a>

- *Type:* str

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#environment RobomakerRobotApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]

The sources of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#sources RobomakerRobotApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#tags RobomakerRobotApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite">put_robot_software_suite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId">reset_current_revision_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources">reset_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_robot_software_suite` <a name="put_robot_software_suite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite"></a>

```python
def put_robot_software_suite(
  name: str,
  version: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite.parameter.name"></a>

- *Type:* str

The name of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite.parameter.version"></a>

- *Type:* str

The version of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#version RobomakerRobotApplication#version}

---

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[RobomakerRobotApplicationSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]

---

##### `reset_current_revision_id` <a name="reset_current_revision_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId"></a>

```python
def reset_current_revision_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources"></a>

```python
def reset_sources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RobomakerRobotApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RobomakerRobotApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerRobotApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput">current_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput">robot_software_suite_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId">current_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite"></a>

```python
robot_software_suite: RobomakerRobotApplicationRobotSoftwareSuiteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources"></a>

```python
sources: RobomakerRobotApplicationSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a>

---

##### `current_revision_id_input`<sup>Optional</sup> <a name="current_revision_id_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput"></a>

```python
current_revision_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `robot_software_suite_input`<sup>Optional</sup> <a name="robot_software_suite_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput"></a>

```python
robot_software_suite_input: IResolvable | RobomakerRobotApplicationRobotSoftwareSuite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[RobomakerRobotApplicationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `current_revision_id`<sup>Required</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId"></a>

```python
current_revision_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerRobotApplicationConfig <a name="RobomakerRobotApplicationConfig" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  robot_software_suite: RobomakerRobotApplicationRobotSoftwareSuite,
  current_revision_id: str = None,
  environment: str = None,
  name: str = None,
  sources: IResolvable | typing.List[RobomakerRobotApplicationSources] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId">current_revision_id</a></code> | <code>str</code> | The revision ID of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment">environment</a></code> | <code>str</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]</code> | The sources of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite"></a>

```python
robot_software_suite: RobomakerRobotApplicationRobotSoftwareSuite
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

The robot software suite used by the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#robot_software_suite RobomakerRobotApplication#robot_software_suite}

---

##### `current_revision_id`<sup>Optional</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId"></a>

```python
current_revision_id: str
```

- *Type:* str

The revision ID of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#current_revision_id RobomakerRobotApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#environment RobomakerRobotApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[RobomakerRobotApplicationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]

The sources of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#sources RobomakerRobotApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#tags RobomakerRobotApplication#tags}

---

### RobomakerRobotApplicationRobotSoftwareSuite <a name="RobomakerRobotApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite(
  name: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name">name</a></code> | <code>str</code> | The name of robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version">version</a></code> | <code>str</code> | The version of robot software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name"></a>

```python
name: str
```

- *Type:* str

The name of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version"></a>

```python
version: str
```

- *Type:* str

The version of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#version RobomakerRobotApplication#version}

---

### RobomakerRobotApplicationSources <a name="RobomakerRobotApplicationSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplicationSources(
  architecture: str = None,
  s3_bucket: str = None,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture">architecture</a></code> | <code>str</code> | The architecture of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | The Arn of the S3Bucket that stores the robot application source. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key">s3_key</a></code> | <code>str</code> | The s3 key of robot application source. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

The architecture of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#architecture RobomakerRobotApplication#architecture}

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

The Arn of the S3Bucket that stores the robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#s3_bucket RobomakerRobotApplication#s3_bucket}

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

The s3 key of robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/robomaker_robot_application#s3_key RobomakerRobotApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerRobotApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerRobotApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RobomakerRobotApplicationRobotSoftwareSuite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---


### RobomakerRobotApplicationSourcesList <a name="RobomakerRobotApplicationSourcesList" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplicationSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RobomakerRobotApplicationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RobomakerRobotApplicationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>]

---


### RobomakerRobotApplicationSourcesOutputReference <a name="RobomakerRobotApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import robomaker_robot_application

robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_architecture` <a name="reset_architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RobomakerRobotApplicationSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>

---



