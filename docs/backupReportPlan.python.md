# `backupReportPlan` Submodule <a name="`backupReportPlan` Submodule" id="@cdktn/provider-awscc.backupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupReportPlan <a name="BackupReportPlan" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan awscc_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  report_delivery_channel: BackupReportPlanReportDeliveryChannel,
  report_setting: BackupReportPlanReportSetting,
  report_plan_description: str = None,
  report_plan_name: str = None,
  report_plan_tags: IResolvable | typing.List[BackupReportPlanReportPlanTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportDeliveryChannel">report_delivery_channel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportSetting">report_setting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | Identifies the report template for the report. Reports are built using a report template. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportPlanDescription">report_plan_description</a></code> | <code>str</code> | An optional description of the report plan with a maximum of 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportPlanName">report_plan_name</a></code> | <code>str</code> | The unique name of the report plan. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportPlanTags">report_plan_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]</code> | Metadata that you can assign to help organize the report plans that you create. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `report_delivery_channel`<sup>Required</sup> <a name="report_delivery_channel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportDeliveryChannel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `report_setting`<sup>Required</sup> <a name="report_setting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportSetting"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

Identifies the report template for the report. Reports are built using a report template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `report_plan_description`<sup>Optional</sup> <a name="report_plan_description" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportPlanDescription"></a>

- *Type:* str

An optional description of the report plan with a maximum of 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_plan_description BackupReportPlan#report_plan_description}

---

##### `report_plan_name`<sup>Optional</sup> <a name="report_plan_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportPlanName"></a>

- *Type:* str

The unique name of the report plan.

The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_plan_name BackupReportPlan#report_plan_name}

---

##### `report_plan_tags`<sup>Optional</sup> <a name="report_plan_tags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.reportPlanTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]

Metadata that you can assign to help organize the report plans that you create.

Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_plan_tags BackupReportPlan#report_plan_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel">put_report_delivery_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags">put_report_plan_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting">put_report_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanDescription">reset_report_plan_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanName">reset_report_plan_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanTags">reset_report_plan_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_report_delivery_channel` <a name="put_report_delivery_channel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel"></a>

```python
def put_report_delivery_channel(
  s3_bucket_name: str,
  formats: typing.List[str] = None,
  s3_key_prefix: str = None
) -> None
```

###### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.s3BucketName"></a>

- *Type:* str

The unique name of the S3 bucket that receives your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}

---

###### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.formats"></a>

- *Type:* typing.List[str]

A list of the format of your reports: CSV, JSON, or both.

If not specified, the default format is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#formats BackupReportPlan#formats}

---

###### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.s3KeyPrefix"></a>

- *Type:* str

The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3.

The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}

---

##### `put_report_plan_tags` <a name="put_report_plan_tags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags"></a>

```python
def put_report_plan_tags(
  value: IResolvable | typing.List[BackupReportPlanReportPlanTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]

---

##### `put_report_setting` <a name="put_report_setting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting"></a>

```python
def put_report_setting(
  report_template: str,
  accounts: typing.List[str] = None,
  framework_arns: typing.List[str] = None,
  organization_units: typing.List[str] = None,
  regions: typing.List[str] = None
) -> None
```

###### `report_template`<sup>Required</sup> <a name="report_template" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.reportTemplate"></a>

- *Type:* str

Identifies the report template for the report.

Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_template BackupReportPlan#report_template}

---

###### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.accounts"></a>

- *Type:* typing.List[str]

The list of AWS accounts that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#accounts BackupReportPlan#accounts}

---

###### `framework_arns`<sup>Optional</sup> <a name="framework_arns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.frameworkArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the frameworks a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#framework_arns BackupReportPlan#framework_arns}

---

###### `organization_units`<sup>Optional</sup> <a name="organization_units" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.organizationUnits"></a>

- *Type:* typing.List[str]

The list of AWS organization units that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#organization_units BackupReportPlan#organization_units}

---

###### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.regions"></a>

- *Type:* typing.List[str]

The list of AWS regions that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#regions BackupReportPlan#regions}

---

##### `reset_report_plan_description` <a name="reset_report_plan_description" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanDescription"></a>

```python
def reset_report_plan_description() -> None
```

##### `reset_report_plan_name` <a name="reset_report_plan_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanName"></a>

```python
def reset_report_plan_name() -> None
```

##### `reset_report_plan_tags` <a name="reset_report_plan_tags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanTags"></a>

```python
def reset_report_plan_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupReportPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupReportPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupReportPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupReportPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupReportPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel">report_delivery_channel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanArn">report_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTags">report_plan_tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList">BackupReportPlanReportPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSetting">report_setting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput">report_delivery_channel_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescriptionInput">report_plan_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanNameInput">report_plan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTagsInput">report_plan_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSettingInput">report_setting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescription">report_plan_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanName">report_plan_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `report_delivery_channel`<sup>Required</sup> <a name="report_delivery_channel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel"></a>

```python
report_delivery_channel: BackupReportPlanReportDeliveryChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a>

---

##### `report_plan_arn`<sup>Required</sup> <a name="report_plan_arn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanArn"></a>

```python
report_plan_arn: str
```

- *Type:* str

---

##### `report_plan_tags`<sup>Required</sup> <a name="report_plan_tags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTags"></a>

```python
report_plan_tags: BackupReportPlanReportPlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList">BackupReportPlanReportPlanTagsList</a>

---

##### `report_setting`<sup>Required</sup> <a name="report_setting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSetting"></a>

```python
report_setting: BackupReportPlanReportSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a>

---

##### `report_delivery_channel_input`<sup>Optional</sup> <a name="report_delivery_channel_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput"></a>

```python
report_delivery_channel_input: IResolvable | BackupReportPlanReportDeliveryChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `report_plan_description_input`<sup>Optional</sup> <a name="report_plan_description_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescriptionInput"></a>

```python
report_plan_description_input: str
```

- *Type:* str

---

##### `report_plan_name_input`<sup>Optional</sup> <a name="report_plan_name_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanNameInput"></a>

```python
report_plan_name_input: str
```

- *Type:* str

---

##### `report_plan_tags_input`<sup>Optional</sup> <a name="report_plan_tags_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTagsInput"></a>

```python
report_plan_tags_input: IResolvable | typing.List[BackupReportPlanReportPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]

---

##### `report_setting_input`<sup>Optional</sup> <a name="report_setting_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSettingInput"></a>

```python
report_setting_input: IResolvable | BackupReportPlanReportSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `report_plan_description`<sup>Required</sup> <a name="report_plan_description" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescription"></a>

```python
report_plan_description: str
```

- *Type:* str

---

##### `report_plan_name`<sup>Required</sup> <a name="report_plan_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanName"></a>

```python
report_plan_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupReportPlanConfig <a name="BackupReportPlanConfig" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  report_delivery_channel: BackupReportPlanReportDeliveryChannel,
  report_setting: BackupReportPlanReportSetting,
  report_plan_description: str = None,
  report_plan_name: str = None,
  report_plan_tags: IResolvable | typing.List[BackupReportPlanReportPlanTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel">report_delivery_channel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportSetting">report_setting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | Identifies the report template for the report. Reports are built using a report template. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanDescription">report_plan_description</a></code> | <code>str</code> | An optional description of the report plan with a maximum of 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanName">report_plan_name</a></code> | <code>str</code> | The unique name of the report plan. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanTags">report_plan_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]</code> | Metadata that you can assign to help organize the report plans that you create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `report_delivery_channel`<sup>Required</sup> <a name="report_delivery_channel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel"></a>

```python
report_delivery_channel: BackupReportPlanReportDeliveryChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `report_setting`<sup>Required</sup> <a name="report_setting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportSetting"></a>

```python
report_setting: BackupReportPlanReportSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

Identifies the report template for the report. Reports are built using a report template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `report_plan_description`<sup>Optional</sup> <a name="report_plan_description" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanDescription"></a>

```python
report_plan_description: str
```

- *Type:* str

An optional description of the report plan with a maximum of 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_plan_description BackupReportPlan#report_plan_description}

---

##### `report_plan_name`<sup>Optional</sup> <a name="report_plan_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanName"></a>

```python
report_plan_name: str
```

- *Type:* str

The unique name of the report plan.

The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_plan_name BackupReportPlan#report_plan_name}

---

##### `report_plan_tags`<sup>Optional</sup> <a name="report_plan_tags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanTags"></a>

```python
report_plan_tags: IResolvable | typing.List[BackupReportPlanReportPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]

Metadata that you can assign to help organize the report plans that you create.

Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_plan_tags BackupReportPlan#report_plan_tags}

---

### BackupReportPlanReportDeliveryChannel <a name="BackupReportPlanReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportDeliveryChannel(
  s3_bucket_name: str,
  formats: typing.List[str] = None,
  s3_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The unique name of the S3 bucket that receives your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats">formats</a></code> | <code>typing.List[str]</code> | A list of the format of your reports: CSV, JSON, or both. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. |

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

The unique name of the S3 bucket that receives your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats"></a>

```python
formats: typing.List[str]
```

- *Type:* typing.List[str]

A list of the format of your reports: CSV, JSON, or both.

If not specified, the default format is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#formats BackupReportPlan#formats}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3.

The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}

---

### BackupReportPlanReportPlanTags <a name="BackupReportPlanReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportPlanTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#key BackupReportPlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#value BackupReportPlan#value}

---

### BackupReportPlanReportSetting <a name="BackupReportPlanReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportSetting(
  report_template: str,
  accounts: typing.List[str] = None,
  framework_arns: typing.List[str] = None,
  organization_units: typing.List[str] = None,
  regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate">report_template</a></code> | <code>str</code> | Identifies the report template for the report. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | The list of AWS accounts that a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns">framework_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the frameworks a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.organizationUnits">organization_units</a></code> | <code>typing.List[str]</code> | The list of AWS organization units that a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.regions">regions</a></code> | <code>typing.List[str]</code> | The list of AWS regions that a report covers. |

---

##### `report_template`<sup>Required</sup> <a name="report_template" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate"></a>

```python
report_template: str
```

- *Type:* str

Identifies the report template for the report.

Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#report_template BackupReportPlan#report_template}

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

The list of AWS accounts that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#accounts BackupReportPlan#accounts}

---

##### `framework_arns`<sup>Optional</sup> <a name="framework_arns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns"></a>

```python
framework_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the frameworks a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#framework_arns BackupReportPlan#framework_arns}

---

##### `organization_units`<sup>Optional</sup> <a name="organization_units" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.organizationUnits"></a>

```python
organization_units: typing.List[str]
```

- *Type:* typing.List[str]

The list of AWS organization units that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#organization_units BackupReportPlan#organization_units}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of AWS regions that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_report_plan#regions BackupReportPlan#regions}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupReportPlanReportDeliveryChannelOutputReference <a name="BackupReportPlanReportDeliveryChannelOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats">reset_formats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_formats` <a name="reset_formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats"></a>

```python
def reset_formats() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput">formats_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats">formats</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `formats_input`<sup>Optional</sup> <a name="formats_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput"></a>

```python
formats_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```python
formats: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupReportPlanReportDeliveryChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---


### BackupReportPlanReportPlanTagsList <a name="BackupReportPlanReportPlanTagsList" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportPlanTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupReportPlanReportPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupReportPlanReportPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>]

---


### BackupReportPlanReportPlanTagsOutputReference <a name="BackupReportPlanReportPlanTagsOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportPlanTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupReportPlanReportPlanTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>

---


### BackupReportPlanReportSettingOutputReference <a name="BackupReportPlanReportSettingOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_report_plan

backupReportPlan.BackupReportPlanReportSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns">reset_framework_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetOrganizationUnits">reset_organization_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetRegions">reset_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accounts` <a name="reset_accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_framework_arns` <a name="reset_framework_arns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns"></a>

```python
def reset_framework_arns() -> None
```

##### `reset_organization_units` <a name="reset_organization_units" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetOrganizationUnits"></a>

```python
def reset_organization_units() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput">framework_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnitsInput">organization_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput">report_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns">framework_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnits">organization_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate">report_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `framework_arns_input`<sup>Optional</sup> <a name="framework_arns_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput"></a>

```python
framework_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_units_input`<sup>Optional</sup> <a name="organization_units_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnitsInput"></a>

```python
organization_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `report_template_input`<sup>Optional</sup> <a name="report_template_input" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput"></a>

```python
report_template_input: str
```

- *Type:* str

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `framework_arns`<sup>Required</sup> <a name="framework_arns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```python
framework_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_units`<sup>Required</sup> <a name="organization_units" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnits"></a>

```python
organization_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `report_template`<sup>Required</sup> <a name="report_template" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```python
report_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupReportPlanReportSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---



