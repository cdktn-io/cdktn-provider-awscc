# `bcmScheduledReport` Submodule <a name="`bcmScheduledReport` Submodule" id="@cdktn/provider-awscc.bcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmScheduledReport <a name="BcmScheduledReport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReport(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dashboard_arn: str,
  name: str,
  schedule_config: BcmScheduledReportScheduleConfig,
  scheduled_report_execution_role_arn: str,
  description: str = None,
  tags: IResolvable | typing.List[BcmScheduledReportTags] = None,
  widget_date_range_override: BcmScheduledReportWidgetDateRangeOverride = None,
  widget_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dashboardArn">dashboard_arn</a></code> | <code>str</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduledReportExecutionRoleArn">scheduled_report_execution_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]</code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetDateRangeOverride">widget_date_range_override</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetIds">widget_ids</a></code> | <code>typing.List[str]</code> | The list of widget identifiers included in the scheduled report. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_arn`<sup>Required</sup> <a name="dashboard_arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dashboardArn"></a>

- *Type:* str

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.name"></a>

- *Type:* str

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `scheduled_report_execution_role_arn`<sup>Required</sup> <a name="scheduled_report_execution_role_arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduledReportExecutionRoleArn"></a>

- *Type:* str

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.description"></a>

- *Type:* str

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `widget_date_range_override`<sup>Optional</sup> <a name="widget_date_range_override" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetDateRangeOverride"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `widget_ids`<sup>Optional</sup> <a name="widget_ids" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetIds"></a>

- *Type:* typing.List[str]

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig">put_schedule_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride">put_widget_date_range_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride">reset_widget_date_range_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds">reset_widget_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schedule_config` <a name="put_schedule_config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig"></a>

```python
def put_schedule_config(
  schedule_expression: str = None,
  schedule_expression_time_zone: str = None,
  schedule_period: BcmScheduledReportScheduleConfigSchedulePeriod = None,
  state: str = None
) -> None
```

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.scheduleExpression"></a>

- *Type:* str

The schedule expression that specifies when to trigger the scheduled report run.

This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression BcmScheduledReport#schedule_expression}

---

###### `schedule_expression_time_zone`<sup>Optional</sup> <a name="schedule_expression_time_zone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.scheduleExpressionTimeZone"></a>

- *Type:* str

The time zone for the schedule expression, for example, UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone BcmScheduledReport#schedule_expression_time_zone}

---

###### `schedule_period`<sup>Optional</sup> <a name="schedule_period" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.schedulePeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

The time period during which the schedule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_period BcmScheduledReport#schedule_period}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.state"></a>

- *Type:* str

The state of the schedule.

ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#state BcmScheduledReport#state}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BcmScheduledReportTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]

---

##### `put_widget_date_range_override` <a name="put_widget_date_range_override" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride"></a>

```python
def put_widget_date_range_override(
  end_time: BcmScheduledReportWidgetDateRangeOverrideEndTime = None,
  start_time: BcmScheduledReportWidgetDateRangeOverrideStartTime = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride.parameter.endTime"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

The end of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride.parameter.startTime"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

The start of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_widget_date_range_override` <a name="reset_widget_date_range_override" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride"></a>

```python
def reset_widget_date_range_override() -> None
```

##### `reset_widget_ids` <a name="reset_widget_ids" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds"></a>

```python
def reset_widget_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BcmScheduledReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus">health_status</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride">widget_date_range_override</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput">dashboard_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput">schedule_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput">scheduled_report_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput">widget_date_range_override_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput">widget_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn">dashboard_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn">scheduled_report_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds">widget_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `health_status`<sup>Required</sup> <a name="health_status" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus"></a>

```python
health_status: BcmScheduledReportHealthStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig"></a>

```python
schedule_config: BcmScheduledReportScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags"></a>

```python
tags: BcmScheduledReportTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `widget_date_range_override`<sup>Required</sup> <a name="widget_date_range_override" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride"></a>

```python
widget_date_range_override: BcmScheduledReportWidgetDateRangeOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `dashboard_arn_input`<sup>Optional</sup> <a name="dashboard_arn_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput"></a>

```python
dashboard_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_config_input`<sup>Optional</sup> <a name="schedule_config_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput"></a>

```python
schedule_config_input: IResolvable | BcmScheduledReportScheduleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `scheduled_report_execution_role_arn_input`<sup>Optional</sup> <a name="scheduled_report_execution_role_arn_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput"></a>

```python
scheduled_report_execution_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BcmScheduledReportTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]

---

##### `widget_date_range_override_input`<sup>Optional</sup> <a name="widget_date_range_override_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput"></a>

```python
widget_date_range_override_input: IResolvable | BcmScheduledReportWidgetDateRangeOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `widget_ids_input`<sup>Optional</sup> <a name="widget_ids_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput"></a>

```python
widget_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dashboard_arn`<sup>Required</sup> <a name="dashboard_arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn"></a>

```python
dashboard_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scheduled_report_execution_role_arn`<sup>Required</sup> <a name="scheduled_report_execution_role_arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```python
scheduled_report_execution_role_arn: str
```

- *Type:* str

---

##### `widget_ids`<sup>Required</sup> <a name="widget_ids" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds"></a>

```python
widget_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BcmScheduledReportConfig <a name="BcmScheduledReportConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dashboard_arn: str,
  name: str,
  schedule_config: BcmScheduledReportScheduleConfig,
  scheduled_report_execution_role_arn: str,
  description: str = None,
  tags: IResolvable | typing.List[BcmScheduledReportTags] = None,
  widget_date_range_override: BcmScheduledReportWidgetDateRangeOverride = None,
  widget_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn">dashboard_arn</a></code> | <code>str</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name">name</a></code> | <code>str</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn">scheduled_report_execution_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description">description</a></code> | <code>str</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]</code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride">widget_date_range_override</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds">widget_ids</a></code> | <code>typing.List[str]</code> | The list of widget identifiers included in the scheduled report. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_arn`<sup>Required</sup> <a name="dashboard_arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn"></a>

```python
dashboard_arn: str
```

- *Type:* str

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig"></a>

```python
schedule_config: BcmScheduledReportScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `scheduled_report_execution_role_arn`<sup>Required</sup> <a name="scheduled_report_execution_role_arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn"></a>

```python
scheduled_report_execution_role_arn: str
```

- *Type:* str

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BcmScheduledReportTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `widget_date_range_override`<sup>Optional</sup> <a name="widget_date_range_override" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride"></a>

```python
widget_date_range_override: BcmScheduledReportWidgetDateRangeOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `widget_ids`<sup>Optional</sup> <a name="widget_ids" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds"></a>

```python
widget_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

### BcmScheduledReportHealthStatus <a name="BcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportHealthStatus()
```


### BcmScheduledReportScheduleConfig <a name="BcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportScheduleConfig(
  schedule_expression: str = None,
  schedule_expression_time_zone: str = None,
  schedule_period: BcmScheduledReportScheduleConfigSchedulePeriod = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | The schedule expression that specifies when to trigger the scheduled report run. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone">schedule_expression_time_zone</a></code> | <code>str</code> | The time zone for the schedule expression, for example, UTC. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod">schedule_period</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | The time period during which the schedule is active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state">state</a></code> | <code>str</code> | The state of the schedule. |

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

The schedule expression that specifies when to trigger the scheduled report run.

This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression BcmScheduledReport#schedule_expression}

---

##### `schedule_expression_time_zone`<sup>Optional</sup> <a name="schedule_expression_time_zone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone"></a>

```python
schedule_expression_time_zone: str
```

- *Type:* str

The time zone for the schedule expression, for example, UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone BcmScheduledReport#schedule_expression_time_zone}

---

##### `schedule_period`<sup>Optional</sup> <a name="schedule_period" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod"></a>

```python
schedule_period: BcmScheduledReportScheduleConfigSchedulePeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

The time period during which the schedule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_period BcmScheduledReport#schedule_period}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the schedule.

ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#state BcmScheduledReport#state}

---

### BcmScheduledReportScheduleConfigSchedulePeriod <a name="BcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod(
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime">end_time</a></code> | <code>str</code> | The time at which the schedule stops being active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime">start_time</a></code> | <code>str</code> | The time at which the schedule becomes active. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time at which the schedule stops being active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time at which the schedule becomes active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportTags <a name="BcmScheduledReportTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#key BcmScheduledReport#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverride <a name="BcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride(
  end_time: BcmScheduledReportWidgetDateRangeOverrideEndTime = None,
  start_time: BcmScheduledReportWidgetDateRangeOverrideStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | The end of the range. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | The start of the range. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime"></a>

```python
end_time: BcmScheduledReportWidgetDateRangeOverrideEndTime
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

The end of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime"></a>

```python
start_time: BcmScheduledReportWidgetDateRangeOverrideStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

The start of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportWidgetDateRangeOverrideEndTime <a name="BcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime(
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type">type</a></code> | <code>str</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value">value</a></code> | <code>str</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type"></a>

```python
type: str
```

- *Type:* str

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value"></a>

```python
value: str
```

- *Type:* str

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverrideStartTime <a name="BcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime(
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type">type</a></code> | <code>str</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value">value</a></code> | <code>str</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type"></a>

```python
type: str
```

- *Type:* str

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value"></a>

```python
value: str
```

- *Type:* str

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmScheduledReportHealthStatusOutputReference <a name="BcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">last_refreshed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_refreshed_at`<sup>Required</sup> <a name="last_refreshed_at" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```python
last_refreshed_at: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```python
internal_value: BcmScheduledReportHealthStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a>

---


### BcmScheduledReportScheduleConfigOutputReference <a name="BcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod">put_schedule_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone">reset_schedule_expression_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod">reset_schedule_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule_period` <a name="put_schedule_period" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod"></a>

```python
def put_schedule_period(
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod.parameter.endTime"></a>

- *Type:* str

The time at which the schedule stops being active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod.parameter.startTime"></a>

- *Type:* str

The time at which the schedule becomes active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_schedule_expression_time_zone` <a name="reset_schedule_expression_time_zone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone"></a>

```python
def reset_schedule_expression_time_zone() -> None
```

##### `reset_schedule_period` <a name="reset_schedule_period" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod"></a>

```python
def reset_schedule_period() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">schedule_period</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput">schedule_expression_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput">schedule_period_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">schedule_expression_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_period`<sup>Required</sup> <a name="schedule_period" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```python
schedule_period: BcmScheduledReportScheduleConfigSchedulePeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression_time_zone_input`<sup>Optional</sup> <a name="schedule_expression_time_zone_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput"></a>

```python
schedule_expression_time_zone_input: str
```

- *Type:* str

---

##### `schedule_period_input`<sup>Optional</sup> <a name="schedule_period_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput"></a>

```python
schedule_period_input: IResolvable | BcmScheduledReportScheduleConfigSchedulePeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_time_zone`<sup>Required</sup> <a name="schedule_expression_time_zone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```python
schedule_expression_time_zone: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmScheduledReportScheduleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---


### BcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="BcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmScheduledReportScheduleConfigSchedulePeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---


### BcmScheduledReportTagsList <a name="BcmScheduledReportTagsList" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmScheduledReportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BcmScheduledReportTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>]

---


### BcmScheduledReportTagsOutputReference <a name="BcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmScheduledReportTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>

---


### BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmScheduledReportWidgetDateRangeOverrideEndTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---


### BcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime">put_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime">put_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_time` <a name="put_end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime"></a>

```python
def put_end_time(
  type: str = None,
  value: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime.parameter.type"></a>

- *Type:* str

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime.parameter.value"></a>

- *Type:* str

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

##### `put_start_time` <a name="put_start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime"></a>

```python
def put_start_time(
  type: str = None,
  value: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime.parameter.type"></a>

- *Type:* str

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime.parameter.value"></a>

- *Type:* str

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput">end_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput">start_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```python
end_time: BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```python
start_time: BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput"></a>

```python
end_time_input: IResolvable | BcmScheduledReportWidgetDateRangeOverrideEndTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput"></a>

```python
start_time_input: IResolvable | BcmScheduledReportWidgetDateRangeOverrideStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmScheduledReportWidgetDateRangeOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---


### BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcm_scheduled_report

bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmScheduledReportWidgetDateRangeOverrideStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---



