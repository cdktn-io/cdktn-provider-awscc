# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktn/provider-awscc.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition awscc_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compression: str,
  format: str,
  refresh_closed_reports: bool | IResolvable,
  report_name: str,
  report_versioning: str,
  s3_bucket: str,
  s3_prefix: str,
  s3_region: str,
  time_unit: str,
  additional_artifacts: typing.List[str] = None,
  additional_schema_elements: typing.List[str] = None,
  billing_view_arn: str = None,
  tags: IResolvable | typing.List[CurReportDefinitionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.compression">compression</a></code> | <code>str</code> | The compression format that AWS uses for the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.format">format</a></code> | <code>str</code> | The format that AWS saves the report in. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.refreshClosedReports">refresh_closed_reports</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.reportName">report_name</a></code> | <code>str</code> | The name of the report that you want to create. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.reportVersioning">report_versioning</a></code> | <code>str</code> | Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Bucket">s3_bucket</a></code> | <code>str</code> | The S3 bucket where AWS delivers the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Prefix">s3_prefix</a></code> | <code>str</code> | The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Region">s3_region</a></code> | <code>str</code> | The region of the S3 bucket that AWS delivers the report into. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.timeUnit">time_unit</a></code> | <code>str</code> | The granularity of the line items in the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalArtifacts">additional_artifacts</a></code> | <code>typing.List[str]</code> | A list of manifests that you want Amazon Web Services to create for this report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalSchemaElements">additional_schema_elements</a></code> | <code>typing.List[str]</code> | A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.billingViewArn">billing_view_arn</a></code> | <code>str</code> | The Amazon resource name of the billing view. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.compression"></a>

- *Type:* str

The compression format that AWS uses for the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.format"></a>

- *Type:* str

The format that AWS saves the report in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#format CurReportDefinition#format}

---

##### `refresh_closed_reports`<sup>Required</sup> <a name="refresh_closed_reports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.refreshClosedReports"></a>

- *Type:* bool | cdktn.IResolvable

Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months.

These charges can include refunds, credits, or support fees.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.reportName"></a>

- *Type:* str

The name of the report that you want to create.

The name must be unique, is case sensitive, and can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}

---

##### `report_versioning`<sup>Required</sup> <a name="report_versioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.reportVersioning"></a>

- *Type:* str

Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Bucket"></a>

- *Type:* str

The S3 bucket where AWS delivers the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Prefix"></a>

- *Type:* str

The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Region"></a>

- *Type:* str

The region of the S3 bucket that AWS delivers the report into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.timeUnit"></a>

- *Type:* str

The granularity of the line items in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}

---

##### `additional_artifacts`<sup>Optional</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalArtifacts"></a>

- *Type:* typing.List[str]

A list of manifests that you want Amazon Web Services to create for this report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}

---

##### `additional_schema_elements`<sup>Optional</sup> <a name="additional_schema_elements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalSchemaElements"></a>

- *Type:* typing.List[str]

A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}

---

##### `billing_view_arn`<sup>Optional</sup> <a name="billing_view_arn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.billingViewArn"></a>

- *Type:* str

The Amazon resource name of the billing view.

You can get this value by using the billing view service public APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#billing_view_arn CurReportDefinition#billing_view_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">reset_additional_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalSchemaElements">reset_additional_schema_elements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetBillingViewArn">reset_billing_view_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CurReportDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]

---

##### `reset_additional_artifacts` <a name="reset_additional_artifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```python
def reset_additional_artifacts() -> None
```

##### `reset_additional_schema_elements` <a name="reset_additional_schema_elements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalSchemaElements"></a>

```python
def reset_additional_schema_elements() -> None
```

##### `reset_billing_view_arn` <a name="reset_billing_view_arn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetBillingViewArn"></a>

```python
def reset_billing_view_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CurReportDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CurReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CurReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList">CurReportDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">additional_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">additional_schema_elements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArnInput">billing_view_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">refresh_closed_reports_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportNameInput">report_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioningInput">report_versioning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3RegionInput">s3_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifacts">additional_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">additional_schema_elements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArn">billing_view_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReports">refresh_closed_reports</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportName">report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioning">report_versioning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Region">s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tags"></a>

```python
tags: CurReportDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList">CurReportDefinitionTagsList</a>

---

##### `additional_artifacts_input`<sup>Optional</sup> <a name="additional_artifacts_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```python
additional_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_schema_elements_input`<sup>Optional</sup> <a name="additional_schema_elements_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```python
additional_schema_elements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_view_arn_input`<sup>Optional</sup> <a name="billing_view_arn_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArnInput"></a>

```python
billing_view_arn_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `refresh_closed_reports_input`<sup>Optional</sup> <a name="refresh_closed_reports_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```python
refresh_closed_reports_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `report_name_input`<sup>Optional</sup> <a name="report_name_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```python
report_name_input: str
```

- *Type:* str

---

##### `report_versioning_input`<sup>Optional</sup> <a name="report_versioning_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```python
report_versioning_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `s3_region_input`<sup>Optional</sup> <a name="s3_region_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```python
s3_region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CurReportDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `additional_artifacts`<sup>Required</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```python
additional_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_schema_elements`<sup>Required</sup> <a name="additional_schema_elements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```python
additional_schema_elements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_view_arn`<sup>Required</sup> <a name="billing_view_arn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArn"></a>

```python
billing_view_arn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `refresh_closed_reports`<sup>Required</sup> <a name="refresh_closed_reports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```python
refresh_closed_reports: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

---

##### `report_versioning`<sup>Required</sup> <a name="report_versioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```python
report_versioning: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compression: str,
  format: str,
  refresh_closed_reports: bool | IResolvable,
  report_name: str,
  report_versioning: str,
  s3_bucket: str,
  s3_prefix: str,
  s3_region: str,
  time_unit: str,
  additional_artifacts: typing.List[str] = None,
  additional_schema_elements: typing.List[str] = None,
  billing_view_arn: str = None,
  tags: IResolvable | typing.List[CurReportDefinitionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.compression">compression</a></code> | <code>str</code> | The compression format that AWS uses for the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.format">format</a></code> | <code>str</code> | The format that AWS saves the report in. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">refresh_closed_reports</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportName">report_name</a></code> | <code>str</code> | The name of the report that you want to create. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">report_versioning</a></code> | <code>str</code> | Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | The S3 bucket where AWS delivers the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Region">s3_region</a></code> | <code>str</code> | The region of the S3 bucket that AWS delivers the report into. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">time_unit</a></code> | <code>str</code> | The granularity of the line items in the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">additional_artifacts</a></code> | <code>typing.List[str]</code> | A list of manifests that you want Amazon Web Services to create for this report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">additional_schema_elements</a></code> | <code>typing.List[str]</code> | A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.billingViewArn">billing_view_arn</a></code> | <code>str</code> | The Amazon resource name of the billing view. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

The compression format that AWS uses for the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format that AWS saves the report in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#format CurReportDefinition#format}

---

##### `refresh_closed_reports`<sup>Required</sup> <a name="refresh_closed_reports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```python
refresh_closed_reports: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months.

These charges can include refunds, credits, or support fees.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

The name of the report that you want to create.

The name must be unique, is case sensitive, and can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}

---

##### `report_versioning`<sup>Required</sup> <a name="report_versioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```python
report_versioning: str
```

- *Type:* str

Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

The S3 bucket where AWS delivers the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

The region of the S3 bucket that AWS delivers the report into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

The granularity of the line items in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}

---

##### `additional_artifacts`<sup>Optional</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```python
additional_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

A list of manifests that you want Amazon Web Services to create for this report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}

---

##### `additional_schema_elements`<sup>Optional</sup> <a name="additional_schema_elements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```python
additional_schema_elements: typing.List[str]
```

- *Type:* typing.List[str]

A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}

---

##### `billing_view_arn`<sup>Optional</sup> <a name="billing_view_arn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.billingViewArn"></a>

```python
billing_view_arn: str
```

- *Type:* str

The Amazon resource name of the billing view.

You can get this value by using the billing view service public APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#billing_view_arn CurReportDefinition#billing_view_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CurReportDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}.

---

### CurReportDefinitionTags <a name="CurReportDefinitionTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#key CurReportDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#value CurReportDefinition#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#key CurReportDefinition#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#value CurReportDefinition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurReportDefinitionTagsList <a name="CurReportDefinitionTagsList" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CurReportDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CurReportDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>]

---


### CurReportDefinitionTagsOutputReference <a name="CurReportDefinitionTagsOutputReference" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cur_report_definition

curReportDefinition.CurReportDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CurReportDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>

---



