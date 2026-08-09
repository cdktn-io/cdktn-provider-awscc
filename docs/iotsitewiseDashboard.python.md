# `iotsitewiseDashboard` Submodule <a name="`iotsitewiseDashboard` Submodule" id="@cdktn/provider-awscc.iotsitewiseDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseDashboard <a name="IotsitewiseDashboard" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard awscc_iotsitewise_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dashboard_definition: str,
  dashboard_description: str,
  dashboard_name: str,
  project_id: str = None,
  tags: IResolvable | typing.List[IotsitewiseDashboardTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDefinition">dashboard_definition</a></code> | <code>str</code> | The dashboard definition specified in a JSON literal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDescription">dashboard_description</a></code> | <code>str</code> | A description for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardName">dashboard_name</a></code> | <code>str</code> | A friendly name for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the project in which to create the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]</code> | A list of key-value pairs that contain metadata for the dashboard. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_definition`<sup>Required</sup> <a name="dashboard_definition" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDefinition"></a>

- *Type:* str

The dashboard definition specified in a JSON literal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_definition IotsitewiseDashboard#dashboard_definition}

---

##### `dashboard_description`<sup>Required</sup> <a name="dashboard_description" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDescription"></a>

- *Type:* str

A description for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_description IotsitewiseDashboard#dashboard_description}

---

##### `dashboard_name`<sup>Required</sup> <a name="dashboard_name" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardName"></a>

- *Type:* str

A friendly name for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_name IotsitewiseDashboard#dashboard_name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the project in which to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#project_id IotsitewiseDashboard#project_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]

A list of key-value pairs that contain metadata for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#tags IotsitewiseDashboard#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotsitewiseDashboardTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]

---

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsitewiseDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsitewiseDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsitewiseDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsitewiseDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardArn">dashboard_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList">IotsitewiseDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinitionInput">dashboard_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescriptionInput">dashboard_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardNameInput">dashboard_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinition">dashboard_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescription">dashboard_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardName">dashboard_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_arn`<sup>Required</sup> <a name="dashboard_arn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardArn"></a>

```python
dashboard_arn: str
```

- *Type:* str

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tags"></a>

```python
tags: IotsitewiseDashboardTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList">IotsitewiseDashboardTagsList</a>

---

##### `dashboard_definition_input`<sup>Optional</sup> <a name="dashboard_definition_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinitionInput"></a>

```python
dashboard_definition_input: str
```

- *Type:* str

---

##### `dashboard_description_input`<sup>Optional</sup> <a name="dashboard_description_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescriptionInput"></a>

```python
dashboard_description_input: str
```

- *Type:* str

---

##### `dashboard_name_input`<sup>Optional</sup> <a name="dashboard_name_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardNameInput"></a>

```python
dashboard_name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotsitewiseDashboardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]

---

##### `dashboard_definition`<sup>Required</sup> <a name="dashboard_definition" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinition"></a>

```python
dashboard_definition: str
```

- *Type:* str

---

##### `dashboard_description`<sup>Required</sup> <a name="dashboard_description" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescription"></a>

```python
dashboard_description: str
```

- *Type:* str

---

##### `dashboard_name`<sup>Required</sup> <a name="dashboard_name" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardName"></a>

```python
dashboard_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseDashboardConfig <a name="IotsitewiseDashboardConfig" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dashboard_definition: str,
  dashboard_description: str,
  dashboard_name: str,
  project_id: str = None,
  tags: IResolvable | typing.List[IotsitewiseDashboardTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDefinition">dashboard_definition</a></code> | <code>str</code> | The dashboard definition specified in a JSON literal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDescription">dashboard_description</a></code> | <code>str</code> | A description for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardName">dashboard_name</a></code> | <code>str</code> | A friendly name for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project in which to create the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]</code> | A list of key-value pairs that contain metadata for the dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_definition`<sup>Required</sup> <a name="dashboard_definition" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDefinition"></a>

```python
dashboard_definition: str
```

- *Type:* str

The dashboard definition specified in a JSON literal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_definition IotsitewiseDashboard#dashboard_definition}

---

##### `dashboard_description`<sup>Required</sup> <a name="dashboard_description" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDescription"></a>

```python
dashboard_description: str
```

- *Type:* str

A description for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_description IotsitewiseDashboard#dashboard_description}

---

##### `dashboard_name`<sup>Required</sup> <a name="dashboard_name" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardName"></a>

```python
dashboard_name: str
```

- *Type:* str

A friendly name for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_name IotsitewiseDashboard#dashboard_name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project in which to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#project_id IotsitewiseDashboard#project_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotsitewiseDashboardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]

A list of key-value pairs that contain metadata for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#tags IotsitewiseDashboard#tags}

---

### IotsitewiseDashboardTags <a name="IotsitewiseDashboardTags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboardTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#key IotsitewiseDashboard#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#value IotsitewiseDashboard#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#key IotsitewiseDashboard#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#value IotsitewiseDashboard#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseDashboardTagsList <a name="IotsitewiseDashboardTagsList" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboardTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseDashboardTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseDashboardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>]

---


### IotsitewiseDashboardTagsOutputReference <a name="IotsitewiseDashboardTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_dashboard

iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseDashboardTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>

---



