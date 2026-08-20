# `cloudtrailDashboard` Submodule <a name="`cloudtrailDashboard` Submodule" id="@cdktn/provider-awscc.cloudtrailDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailDashboard <a name="CloudtrailDashboard" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard awscc_cloudtrail_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str = None,
  refresh_schedule: CloudtrailDashboardRefreshSchedule = None,
  tags: IResolvable | typing.List[CloudtrailDashboardTags] = None,
  termination_protection_enabled: bool | IResolvable = None,
  widgets: IResolvable | typing.List[CloudtrailDashboardWidgets] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.refreshSchedule">refresh_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | Configures the automatic refresh schedule for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#tags CloudtrailDashboard#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the dashboard is protected from termination. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.widgets">widgets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]</code> | List of widgets on the dashboard. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.name"></a>

- *Type:* str

The name of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#name CloudtrailDashboard#name}

---

##### `refresh_schedule`<sup>Optional</sup> <a name="refresh_schedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.refreshSchedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

Configures the automatic refresh schedule for the dashboard.

Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#refresh_schedule CloudtrailDashboard#refresh_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#tags CloudtrailDashboard#tags}.

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the dashboard is protected from termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#termination_protection_enabled CloudtrailDashboard#termination_protection_enabled}

---

##### `widgets`<sup>Optional</sup> <a name="widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.Initializer.parameter.widgets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]

List of widgets on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#widgets CloudtrailDashboard#widgets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule">put_refresh_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putWidgets">put_widgets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetRefreshSchedule">reset_refresh_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTerminationProtectionEnabled">reset_termination_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetWidgets">reset_widgets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_refresh_schedule` <a name="put_refresh_schedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule"></a>

```python
def put_refresh_schedule(
  frequency: CloudtrailDashboardRefreshScheduleFrequency = None,
  status: str = None,
  time_of_day: str = None
) -> None
```

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule.parameter.frequency"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#frequency CloudtrailDashboard#frequency}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule.parameter.status"></a>

- *Type:* str

The status of the schedule. Supported values are ENABLED and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#status CloudtrailDashboard#status}

---

###### `time_of_day`<sup>Optional</sup> <a name="time_of_day" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putRefreshSchedule.parameter.timeOfDay"></a>

- *Type:* str

StartTime of the automatic schedule refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#time_of_day CloudtrailDashboard#time_of_day}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudtrailDashboardTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]

---

##### `put_widgets` <a name="put_widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putWidgets"></a>

```python
def put_widgets(
  value: IResolvable | typing.List[CloudtrailDashboardWidgets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.putWidgets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_refresh_schedule` <a name="reset_refresh_schedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetRefreshSchedule"></a>

```python
def reset_refresh_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_termination_protection_enabled` <a name="reset_termination_protection_enabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetTerminationProtectionEnabled"></a>

```python
def reset_termination_protection_enabled() -> None
```

##### `reset_widgets` <a name="reset_widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.resetWidgets"></a>

```python
def reset_widgets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudtrailDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudtrailDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudtrailDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudtrailDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dashboardArn">dashboard_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshSchedule">refresh_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference">CloudtrailDashboardRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList">CloudtrailDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgets">widgets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList">CloudtrailDashboardWidgetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshScheduleInput">refresh_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabledInput">termination_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgetsInput">widgets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `dashboard_arn`<sup>Required</sup> <a name="dashboard_arn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.dashboardArn"></a>

```python
dashboard_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `refresh_schedule`<sup>Required</sup> <a name="refresh_schedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshSchedule"></a>

```python
refresh_schedule: CloudtrailDashboardRefreshScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference">CloudtrailDashboardRefreshScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tags"></a>

```python
tags: CloudtrailDashboardTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList">CloudtrailDashboardTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `widgets`<sup>Required</sup> <a name="widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgets"></a>

```python
widgets: CloudtrailDashboardWidgetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList">CloudtrailDashboardWidgetsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_schedule_input`<sup>Optional</sup> <a name="refresh_schedule_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.refreshScheduleInput"></a>

```python
refresh_schedule_input: IResolvable | CloudtrailDashboardRefreshSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudtrailDashboardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]

---

##### `termination_protection_enabled_input`<sup>Optional</sup> <a name="termination_protection_enabled_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabledInput"></a>

```python
termination_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `widgets_input`<sup>Optional</sup> <a name="widgets_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.widgetsInput"></a>

```python
widgets_input: IResolvable | typing.List[CloudtrailDashboardWidgets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `termination_protection_enabled`<sup>Required</sup> <a name="termination_protection_enabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailDashboardConfig <a name="CloudtrailDashboardConfig" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str = None,
  refresh_schedule: CloudtrailDashboardRefreshSchedule = None,
  tags: IResolvable | typing.List[CloudtrailDashboardTags] = None,
  termination_protection_enabled: bool | IResolvable = None,
  widgets: IResolvable | typing.List[CloudtrailDashboardWidgets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.name">name</a></code> | <code>str</code> | The name of the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.refreshSchedule">refresh_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | Configures the automatic refresh schedule for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#tags CloudtrailDashboard#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the dashboard is protected from termination. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.widgets">widgets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]</code> | List of widgets on the dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#name CloudtrailDashboard#name}

---

##### `refresh_schedule`<sup>Optional</sup> <a name="refresh_schedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.refreshSchedule"></a>

```python
refresh_schedule: CloudtrailDashboardRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

Configures the automatic refresh schedule for the dashboard.

Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#refresh_schedule CloudtrailDashboard#refresh_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudtrailDashboardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#tags CloudtrailDashboard#tags}.

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the dashboard is protected from termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#termination_protection_enabled CloudtrailDashboard#termination_protection_enabled}

---

##### `widgets`<sup>Optional</sup> <a name="widgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardConfig.property.widgets"></a>

```python
widgets: IResolvable | typing.List[CloudtrailDashboardWidgets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]

List of widgets on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#widgets CloudtrailDashboard#widgets}

---

### CloudtrailDashboardRefreshSchedule <a name="CloudtrailDashboardRefreshSchedule" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardRefreshSchedule(
  frequency: CloudtrailDashboardRefreshScheduleFrequency = None,
  status: str = None,
  time_of_day: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.frequency">frequency</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#frequency CloudtrailDashboard#frequency}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.status">status</a></code> | <code>str</code> | The status of the schedule. Supported values are ENABLED and DISABLED. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.timeOfDay">time_of_day</a></code> | <code>str</code> | StartTime of the automatic schedule refresh. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.frequency"></a>

```python
frequency: CloudtrailDashboardRefreshScheduleFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#frequency CloudtrailDashboard#frequency}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the schedule. Supported values are ENABLED and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#status CloudtrailDashboard#status}

---

##### `time_of_day`<sup>Optional</sup> <a name="time_of_day" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

StartTime of the automatic schedule refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#time_of_day CloudtrailDashboard#time_of_day}

---

### CloudtrailDashboardRefreshScheduleFrequency <a name="CloudtrailDashboardRefreshScheduleFrequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency(
  unit: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.unit">unit</a></code> | <code>str</code> | The frequency unit. Supported values are HOURS and DAYS. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The frequency value. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.unit"></a>

```python
unit: str
```

- *Type:* str

The frequency unit. Supported values are HOURS and DAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#unit CloudtrailDashboard#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The frequency value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#value CloudtrailDashboard#value}

---

### CloudtrailDashboardTags <a name="CloudtrailDashboardTags" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#key CloudtrailDashboard#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#value CloudtrailDashboard#value}

---

### CloudtrailDashboardWidgets <a name="CloudtrailDashboardWidgets" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardWidgets(
  query_parameters: typing.List[str] = None,
  query_statement: str = None,
  view_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryParameters">query_parameters</a></code> | <code>typing.List[str]</code> | The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryStatement">query_statement</a></code> | <code>str</code> | The SQL query statement on one or more event data stores. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.viewProperties">view_properties</a></code> | <code>typing.Mapping[str]</code> | The view properties of the widget. |

---

##### `query_parameters`<sup>Optional</sup> <a name="query_parameters" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryParameters"></a>

```python
query_parameters: typing.List[str]
```

- *Type:* typing.List[str]

The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#query_parameters CloudtrailDashboard#query_parameters}

---

##### `query_statement`<sup>Optional</sup> <a name="query_statement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

The SQL query statement on one or more event data stores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#query_statement CloudtrailDashboard#query_statement}

---

##### `view_properties`<sup>Optional</sup> <a name="view_properties" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets.property.viewProperties"></a>

```python
view_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The view properties of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#view_properties CloudtrailDashboard#view_properties}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailDashboardRefreshScheduleFrequencyOutputReference <a name="CloudtrailDashboardRefreshScheduleFrequencyOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailDashboardRefreshScheduleFrequency
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

---


### CloudtrailDashboardRefreshScheduleOutputReference <a name="CloudtrailDashboardRefreshScheduleOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency">put_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetTimeOfDay">reset_time_of_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_frequency` <a name="put_frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency"></a>

```python
def put_frequency(
  unit: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency.parameter.unit"></a>

- *Type:* str

The frequency unit. Supported values are HOURS and DAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#unit CloudtrailDashboard#unit}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.putFrequency.parameter.value"></a>

- *Type:* typing.Union[int, float]

The frequency value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_dashboard#value CloudtrailDashboard#value}

---

##### `reset_frequency` <a name="reset_frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_time_of_day` <a name="reset_time_of_day" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.resetTimeOfDay"></a>

```python
def reset_time_of_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequency">frequency</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference">CloudtrailDashboardRefreshScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequencyInput">frequency_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDayInput">time_of_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequency"></a>

```python
frequency: CloudtrailDashboardRefreshScheduleFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequencyOutputReference">CloudtrailDashboardRefreshScheduleFrequencyOutputReference</a>

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.frequencyInput"></a>

```python
frequency_input: IResolvable | CloudtrailDashboardRefreshScheduleFrequency
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleFrequency">CloudtrailDashboardRefreshScheduleFrequency</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `time_of_day_input`<sup>Optional</sup> <a name="time_of_day_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDayInput"></a>

```python
time_of_day_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailDashboardRefreshSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardRefreshSchedule">CloudtrailDashboardRefreshSchedule</a>

---


### CloudtrailDashboardTagsList <a name="CloudtrailDashboardTagsList" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailDashboardTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailDashboardTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>]

---


### CloudtrailDashboardTagsOutputReference <a name="CloudtrailDashboardTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailDashboardTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardTags">CloudtrailDashboardTags</a>

---


### CloudtrailDashboardWidgetsList <a name="CloudtrailDashboardWidgetsList" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardWidgetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailDashboardWidgetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailDashboardWidgets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>]

---


### CloudtrailDashboardWidgetsOutputReference <a name="CloudtrailDashboardWidgetsOutputReference" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_dashboard

cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryParameters">reset_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryStatement">reset_query_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetViewProperties">reset_view_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_parameters` <a name="reset_query_parameters" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryParameters"></a>

```python
def reset_query_parameters() -> None
```

##### `reset_query_statement` <a name="reset_query_statement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetQueryStatement"></a>

```python
def reset_query_statement() -> None
```

##### `reset_view_properties` <a name="reset_view_properties" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.resetViewProperties"></a>

```python
def reset_view_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParametersInput">query_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatementInput">query_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewPropertiesInput">view_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParameters">query_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatement">query_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewProperties">view_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_parameters_input`<sup>Optional</sup> <a name="query_parameters_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParametersInput"></a>

```python
query_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_statement_input`<sup>Optional</sup> <a name="query_statement_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatementInput"></a>

```python
query_statement_input: str
```

- *Type:* str

---

##### `view_properties_input`<sup>Optional</sup> <a name="view_properties_input" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewPropertiesInput"></a>

```python
view_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_parameters`<sup>Required</sup> <a name="query_parameters" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryParameters"></a>

```python
query_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

---

##### `view_properties`<sup>Required</sup> <a name="view_properties" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.viewProperties"></a>

```python
view_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailDashboardWidgets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailDashboard.CloudtrailDashboardWidgets">CloudtrailDashboardWidgets</a>

---



