# `fisExperimentTemplate` Submodule <a name="`fisExperimentTemplate` Submodule" id="@cdktn/provider-awscc.fisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisExperimentTemplate <a name="FisExperimentTemplate" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template awscc_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  role_arn: str,
  stop_conditions: IResolvable | typing.List[FisExperimentTemplateStopConditions],
  targets: IResolvable | typing.Mapping[FisExperimentTemplateTargets],
  actions: IResolvable | typing.Mapping[FisExperimentTemplateActions] = None,
  experiment_options: FisExperimentTemplateExperimentOptions = None,
  experiment_report_configuration: FisExperimentTemplateExperimentReportConfiguration = None,
  log_configuration: FisExperimentTemplateLogConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.stopConditions">stop_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]</code> | One or more stop conditions. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]</code> | The targets for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]</code> | The actions for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentOptions">experiment_options</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentReportConfiguration">experiment_report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.description"></a>

- *Type:* str

A description for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}

---

##### `stop_conditions`<sup>Required</sup> <a name="stop_conditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.stopConditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]

One or more stop conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#stop_conditions FisExperimentTemplate#stop_conditions}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]

The targets for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]

The actions for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#actions FisExperimentTemplate#actions}

---

##### `experiment_options`<sup>Optional</sup> <a name="experiment_options" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}.

---

##### `experiment_report_configuration`<sup>Optional</sup> <a name="experiment_report_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentReportConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}.

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions">put_experiment_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration">put_experiment_report_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions">put_stop_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions">reset_experiment_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration">reset_experiment_report_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.Mapping[FisExperimentTemplateActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]

---

##### `put_experiment_options` <a name="put_experiment_options" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions"></a>

```python
def put_experiment_options(
  account_targeting: str = None,
  empty_target_resolution_mode: str = None
) -> None
```

###### `account_targeting`<sup>Optional</sup> <a name="account_targeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions.parameter.accountTargeting"></a>

- *Type:* str

The account targeting setting for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}

---

###### `empty_target_resolution_mode`<sup>Optional</sup> <a name="empty_target_resolution_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions.parameter.emptyTargetResolutionMode"></a>

- *Type:* str

The target resolution failure mode for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}

---

##### `put_experiment_report_configuration` <a name="put_experiment_report_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration"></a>

```python
def put_experiment_report_configuration(
  data_sources: FisExperimentTemplateExperimentReportConfigurationDataSources = None,
  outputs: FisExperimentTemplateExperimentReportConfigurationOutputs = None,
  post_experiment_duration: str = None,
  pre_experiment_duration: str = None
) -> None
```

###### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.dataSources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}.

---

###### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.outputs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}.

---

###### `post_experiment_duration`<sup>Optional</sup> <a name="post_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.postExperimentDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}.

---

###### `pre_experiment_duration`<sup>Optional</sup> <a name="pre_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.preExperimentDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}.

---

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration"></a>

```python
def put_log_configuration(
  cloudwatch_logs_configuration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration = None,
  log_schema_version: typing.Union[int, float] = None,
  s3_configuration: FisExperimentTemplateLogConfigurationS3Configuration = None
) -> None
```

###### `cloudwatch_logs_configuration`<sup>Optional</sup> <a name="cloudwatch_logs_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.cloudwatchLogsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}.

---

###### `log_schema_version`<sup>Optional</sup> <a name="log_schema_version" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.logSchemaVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}.

---

###### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.s3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}.

---

##### `put_stop_conditions` <a name="put_stop_conditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions"></a>

```python
def put_stop_conditions(
  value: IResolvable | typing.List[FisExperimentTemplateStopConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.Mapping[FisExperimentTemplateTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_experiment_options` <a name="reset_experiment_options" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions"></a>

```python
def reset_experiment_options() -> None
```

##### `reset_experiment_report_configuration` <a name="reset_experiment_report_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration"></a>

```python
def reset_experiment_report_configuration() -> None
```

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FisExperimentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FisExperimentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FisExperimentTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap">FisExperimentTemplateActionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions">experiment_options</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration">experiment_report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentTemplateId">experiment_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditions">stop_conditions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList">FisExperimentTemplateStopConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap">FisExperimentTemplateTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput">experiment_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput">experiment_report_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput">log_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionsInput">stop_conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actions"></a>

```python
actions: FisExperimentTemplateActionsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap">FisExperimentTemplateActionsMap</a>

---

##### `experiment_options`<sup>Required</sup> <a name="experiment_options" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions"></a>

```python
experiment_options: FisExperimentTemplateExperimentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `experiment_report_configuration`<sup>Required</sup> <a name="experiment_report_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration"></a>

```python
experiment_report_configuration: FisExperimentTemplateExperimentReportConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `experiment_template_id`<sup>Required</sup> <a name="experiment_template_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentTemplateId"></a>

```python
experiment_template_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration"></a>

```python
log_configuration: FisExperimentTemplateLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `stop_conditions`<sup>Required</sup> <a name="stop_conditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditions"></a>

```python
stop_conditions: FisExperimentTemplateStopConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList">FisExperimentTemplateStopConditionsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targets"></a>

```python
targets: FisExperimentTemplateTargetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap">FisExperimentTemplateTargetsMap</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.Mapping[FisExperimentTemplateActions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_options_input`<sup>Optional</sup> <a name="experiment_options_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput"></a>

```python
experiment_options_input: IResolvable | FisExperimentTemplateExperimentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `experiment_report_configuration_input`<sup>Optional</sup> <a name="experiment_report_configuration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput"></a>

```python
experiment_report_configuration_input: IResolvable | FisExperimentTemplateExperimentReportConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput"></a>

```python
log_configuration_input: IResolvable | FisExperimentTemplateLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stop_conditions_input`<sup>Optional</sup> <a name="stop_conditions_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionsInput"></a>

```python
stop_conditions_input: IResolvable | typing.List[FisExperimentTemplateStopConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.Mapping[FisExperimentTemplateTargets]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FisExperimentTemplateActions <a name="FisExperimentTemplateActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActions(
  action_id: str = None,
  description: str = None,
  parameters: typing.Mapping[str] = None,
  start_after: typing.List[str] = None,
  targets: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.actionId">action_id</a></code> | <code>str</code> | The ID of the action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.description">description</a></code> | <code>str</code> | A description for the action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | The parameters for the action, if applicable. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.startAfter">start_after</a></code> | <code>typing.List[str]</code> | The names of the actions that must be completed before the current action starts. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.targets">targets</a></code> | <code>typing.Mapping[str]</code> | One or more targets for the action. |

---

##### `action_id`<sup>Optional</sup> <a name="action_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

The ID of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The parameters for the action, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}

---

##### `start_after`<sup>Optional</sup> <a name="start_after" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.startAfter"></a>

```python
start_after: typing.List[str]
```

- *Type:* typing.List[str]

The names of the actions that must be completed before the current action starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.targets"></a>

```python
targets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

One or more targets for the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

### FisExperimentTemplateConfig <a name="FisExperimentTemplateConfig" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  role_arn: str,
  stop_conditions: IResolvable | typing.List[FisExperimentTemplateStopConditions],
  targets: IResolvable | typing.Mapping[FisExperimentTemplateTargets],
  actions: IResolvable | typing.Mapping[FisExperimentTemplateActions] = None,
  experiment_options: FisExperimentTemplateExperimentOptions = None,
  experiment_report_configuration: FisExperimentTemplateExperimentReportConfiguration = None,
  log_configuration: FisExperimentTemplateLogConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.description">description</a></code> | <code>str</code> | A description for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopConditions">stop_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]</code> | One or more stop conditions. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]</code> | The targets for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]</code> | The actions for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions">experiment_options</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration">experiment_report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}

---

##### `stop_conditions`<sup>Required</sup> <a name="stop_conditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopConditions"></a>

```python
stop_conditions: IResolvable | typing.List[FisExperimentTemplateStopConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]

One or more stop conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#stop_conditions FisExperimentTemplate#stop_conditions}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.targets"></a>

```python
targets: IResolvable | typing.Mapping[FisExperimentTemplateTargets]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]

The targets for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.actions"></a>

```python
actions: IResolvable | typing.Mapping[FisExperimentTemplateActions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]

The actions for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#actions FisExperimentTemplate#actions}

---

##### `experiment_options`<sup>Optional</sup> <a name="experiment_options" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions"></a>

```python
experiment_options: FisExperimentTemplateExperimentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}.

---

##### `experiment_report_configuration`<sup>Optional</sup> <a name="experiment_report_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration"></a>

```python
experiment_report_configuration: FisExperimentTemplateExperimentReportConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}.

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration"></a>

```python
log_configuration: FisExperimentTemplateLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

### FisExperimentTemplateExperimentOptions <a name="FisExperimentTemplateExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentOptions(
  account_targeting: str = None,
  empty_target_resolution_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting">account_targeting</a></code> | <code>str</code> | The account targeting setting for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode">empty_target_resolution_mode</a></code> | <code>str</code> | The target resolution failure mode for the experiment template. |

---

##### `account_targeting`<sup>Optional</sup> <a name="account_targeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting"></a>

```python
account_targeting: str
```

- *Type:* str

The account targeting setting for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}

---

##### `empty_target_resolution_mode`<sup>Optional</sup> <a name="empty_target_resolution_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode"></a>

```python
empty_target_resolution_mode: str
```

- *Type:* str

The target resolution failure mode for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}

---

### FisExperimentTemplateExperimentReportConfiguration <a name="FisExperimentTemplateExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration(
  data_sources: FisExperimentTemplateExperimentReportConfigurationDataSources = None,
  outputs: FisExperimentTemplateExperimentReportConfigurationOutputs = None,
  post_experiment_duration: str = None,
  pre_experiment_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration">post_experiment_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration">pre_experiment_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}. |

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources"></a>

```python
data_sources: FisExperimentTemplateExperimentReportConfigurationDataSources
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs"></a>

```python
outputs: FisExperimentTemplateExperimentReportConfigurationOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}.

---

##### `post_experiment_duration`<sup>Optional</sup> <a name="post_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration"></a>

```python
post_experiment_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}.

---

##### `pre_experiment_duration`<sup>Optional</sup> <a name="pre_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration"></a>

```python
pre_experiment_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSources <a name="FisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources(
  cloudwatch_dashboards: IResolvable | typing.List[FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboards">cloudwatch_dashboards</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}. |

---

##### `cloudwatch_dashboards`<sup>Optional</sup> <a name="cloudwatch_dashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboards"></a>

```python
cloudwatch_dashboards: IResolvable | typing.List[FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards(
  dashboard_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.property.dashboardIdentifier">dashboard_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#dashboard_identifier FisExperimentTemplate#dashboard_identifier}. |

---

##### `dashboard_identifier`<sup>Optional</sup> <a name="dashboard_identifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.property.dashboardIdentifier"></a>

```python
dashboard_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#dashboard_identifier FisExperimentTemplate#dashboard_identifier}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputs <a name="FisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs(
  experiment_report_s3_configuration: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.experimentReportS3Configuration">experiment_report_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}. |

---

##### `experiment_report_s3_configuration`<sup>Optional</sup> <a name="experiment_report_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.experimentReportS3Configuration"></a>

```python
experiment_report_s3_configuration: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration <a name="FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration(
  bucket_name: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateLogConfiguration <a name="FisExperimentTemplateLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateLogConfiguration(
  cloudwatch_logs_configuration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration = None,
  log_schema_version: typing.Union[int, float] = None,
  s3_configuration: FisExperimentTemplateLogConfigurationS3Configuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration">cloudwatch_logs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion">log_schema_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}. |

---

##### `cloudwatch_logs_configuration`<sup>Optional</sup> <a name="cloudwatch_logs_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration"></a>

```python
cloudwatch_logs_configuration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}.

---

##### `log_schema_version`<sup>Optional</sup> <a name="log_schema_version" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion"></a>

```python
log_schema_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}.

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration"></a>

```python
s3_configuration: FisExperimentTemplateLogConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}.

---

### FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration(
  log_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}. |

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}.

---

### FisExperimentTemplateLogConfigurationS3Configuration <a name="FisExperimentTemplateLogConfigurationS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration(
  bucket_name: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateStopConditions <a name="FisExperimentTemplateStopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateStopConditions(
  source: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTargets <a name="FisExperimentTemplateTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargets(
  filters: IResolvable | typing.List[FisExperimentTemplateTargetsFilters] = None,
  parameters: typing.Mapping[str] = None,
  resource_arns: typing.List[str] = None,
  resource_tags: typing.Mapping[str] = None,
  resource_type: str = None,
  selection_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#filters FisExperimentTemplate#filters}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the target resources. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_tags FisExperimentTemplate#resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceType">resource_type</a></code> | <code>str</code> | The AWS resource type. The resource type must be supported for the specified action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.selectionMode">selection_mode</a></code> | <code>str</code> | Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.filters"></a>

```python
filters: IResolvable | typing.List[FisExperimentTemplateTargetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#filters FisExperimentTemplate#filters}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}.

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the target resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_tags FisExperimentTemplate#resource_tags}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The AWS resource type. The resource type must be supported for the specified action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}

---

##### `selection_mode`<sup>Optional</sup> <a name="selection_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.selectionMode"></a>

```python
selection_mode: str
```

- *Type:* str

Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}

---

### FisExperimentTemplateTargetsFilters <a name="FisExperimentTemplateTargetsFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetsFilters(
  path: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.path">path</a></code> | <code>str</code> | The attribute path for the filter. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.values">values</a></code> | <code>typing.List[str]</code> | The attribute values for the filter. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.path"></a>

```python
path: str
```

- *Type:* str

The attribute path for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The attribute values for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}

---

## Classes <a name="Classes" id="Classes"></a>

### FisExperimentTemplateActionsMap <a name="FisExperimentTemplateActionsMap" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get"></a>

```python
def get(
  key: str
) -> FisExperimentTemplateActionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[FisExperimentTemplateActions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>]

---


### FisExperimentTemplateActionsOutputReference <a name="FisExperimentTemplateActionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetActionId">reset_action_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetStartAfter">reset_start_after</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_id` <a name="reset_action_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetActionId"></a>

```python
def reset_action_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_start_after` <a name="reset_start_after" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetStartAfter"></a>

```python
def reset_start_after() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionIdInput">action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfterInput">start_after_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targetsInput">targets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfter">start_after</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targets">targets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_id_input`<sup>Optional</sup> <a name="action_id_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionIdInput"></a>

```python
action_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_after_input`<sup>Optional</sup> <a name="start_after_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfterInput"></a>

```python
start_after_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targetsInput"></a>

```python
targets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_after`<sup>Required</sup> <a name="start_after" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfter"></a>

```python
start_after: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targets"></a>

```python
targets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>

---


### FisExperimentTemplateExperimentOptionsOutputReference <a name="FisExperimentTemplateExperimentOptionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting">reset_account_targeting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode">reset_empty_target_resolution_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_targeting` <a name="reset_account_targeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting"></a>

```python
def reset_account_targeting() -> None
```

##### `reset_empty_target_resolution_mode` <a name="reset_empty_target_resolution_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode"></a>

```python
def reset_empty_target_resolution_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput">account_targeting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput">empty_target_resolution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">account_targeting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">empty_target_resolution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_targeting_input`<sup>Optional</sup> <a name="account_targeting_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput"></a>

```python
account_targeting_input: str
```

- *Type:* str

---

##### `empty_target_resolution_mode_input`<sup>Optional</sup> <a name="empty_target_resolution_mode_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput"></a>

```python
empty_target_resolution_mode_input: str
```

- *Type:* str

---

##### `account_targeting`<sup>Required</sup> <a name="account_targeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```python
account_targeting: str
```

- *Type:* str

---

##### `empty_target_resolution_mode`<sup>Required</sup> <a name="empty_target_resolution_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```python
empty_target_resolution_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateExperimentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resetDashboardIdentifier">reset_dashboard_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dashboard_identifier` <a name="reset_dashboard_identifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resetDashboardIdentifier"></a>

```python
def reset_dashboard_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifierInput">dashboard_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier">dashboard_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dashboard_identifier_input`<sup>Optional</sup> <a name="dashboard_identifier_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifierInput"></a>

```python
dashboard_identifier_input: str
```

- *Type:* str

---

##### `dashboard_identifier`<sup>Required</sup> <a name="dashboard_identifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier"></a>

```python
dashboard_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards">put_cloudwatch_dashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboards">reset_cloudwatch_dashboards</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_dashboards` <a name="put_cloudwatch_dashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards"></a>

```python
def put_cloudwatch_dashboards(
  value: IResolvable | typing.List[FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]

---

##### `reset_cloudwatch_dashboards` <a name="reset_cloudwatch_dashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboards"></a>

```python
def reset_cloudwatch_dashboards() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards">cloudwatch_dashboards</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardsInput">cloudwatch_dashboards_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_dashboards`<sup>Required</sup> <a name="cloudwatch_dashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards"></a>

```python
cloudwatch_dashboards: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a>

---

##### `cloudwatch_dashboards_input`<sup>Optional</sup> <a name="cloudwatch_dashboards_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardsInput"></a>

```python
cloudwatch_dashboards_input: IResolvable | typing.List[FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources">put_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources">reset_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs">reset_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration">reset_post_experiment_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration">reset_pre_experiment_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_sources` <a name="put_data_sources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources"></a>

```python
def put_data_sources(
  cloudwatch_dashboards: IResolvable | typing.List[FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards] = None
) -> None
```

###### `cloudwatch_dashboards`<sup>Optional</sup> <a name="cloudwatch_dashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources.parameter.cloudwatchDashboards"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}.

---

##### `put_outputs` <a name="put_outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs"></a>

```python
def put_outputs(
  experiment_report_s3_configuration: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration = None
) -> None
```

###### `experiment_report_s3_configuration`<sup>Optional</sup> <a name="experiment_report_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs.parameter.experimentReportS3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}.

---

##### `reset_data_sources` <a name="reset_data_sources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources"></a>

```python
def reset_data_sources() -> None
```

##### `reset_outputs` <a name="reset_outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs"></a>

```python
def reset_outputs() -> None
```

##### `reset_post_experiment_duration` <a name="reset_post_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration"></a>

```python
def reset_post_experiment_duration() -> None
```

##### `reset_pre_experiment_duration` <a name="reset_pre_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration"></a>

```python
def reset_pre_experiment_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput">data_sources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput">outputs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput">post_experiment_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput">pre_experiment_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">post_experiment_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">pre_experiment_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```python
data_sources: FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```python
outputs: FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `data_sources_input`<sup>Optional</sup> <a name="data_sources_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput"></a>

```python
data_sources_input: IResolvable | FisExperimentTemplateExperimentReportConfigurationDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput"></a>

```python
outputs_input: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `post_experiment_duration_input`<sup>Optional</sup> <a name="post_experiment_duration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput"></a>

```python
post_experiment_duration_input: str
```

- *Type:* str

---

##### `pre_experiment_duration_input`<sup>Optional</sup> <a name="pre_experiment_duration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput"></a>

```python
pre_experiment_duration_input: str
```

- *Type:* str

---

##### `post_experiment_duration`<sup>Required</sup> <a name="post_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```python
post_experiment_duration: str
```

- *Type:* str

---

##### `pre_experiment_duration`<sup>Required</sup> <a name="pre_experiment_duration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```python
pre_experiment_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateExperimentReportConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration">put_experiment_report_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetExperimentReportS3Configuration">reset_experiment_report_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_experiment_report_s3_configuration` <a name="put_experiment_report_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration"></a>

```python
def put_experiment_report_s3_configuration(
  bucket_name: str = None,
  prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

##### `reset_experiment_report_s3_configuration` <a name="reset_experiment_report_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetExperimentReportS3Configuration"></a>

```python
def reset_experiment_report_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration">experiment_report_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3ConfigurationInput">experiment_report_s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_report_s3_configuration`<sup>Required</sup> <a name="experiment_report_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration"></a>

```python
experiment_report_s3_configuration: FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a>

---

##### `experiment_report_s3_configuration_input`<sup>Optional</sup> <a name="experiment_report_s3_configuration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3ConfigurationInput"></a>

```python
experiment_report_s3_configuration_input: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateExperimentReportConfigurationOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### FisExperimentTemplateLogConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration">put_cloudwatch_logs_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration">reset_cloudwatch_logs_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetLogSchemaVersion">reset_log_schema_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs_configuration` <a name="put_cloudwatch_logs_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration"></a>

```python
def put_cloudwatch_logs_configuration(
  log_group_arn: str = None
) -> None
```

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration.parameter.logGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}.

---

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  bucket_name: str = None,
  prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

##### `reset_cloudwatch_logs_configuration` <a name="reset_cloudwatch_logs_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration"></a>

```python
def reset_cloudwatch_logs_configuration() -> None
```

##### `reset_log_schema_version` <a name="reset_log_schema_version" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetLogSchemaVersion"></a>

```python
def reset_log_schema_version() -> None
```

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">cloudwatch_logs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput">cloudwatch_logs_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput">log_schema_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">log_schema_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_configuration`<sup>Required</sup> <a name="cloudwatch_logs_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```python
cloudwatch_logs_configuration: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `cloudwatch_logs_configuration_input`<sup>Optional</sup> <a name="cloudwatch_logs_configuration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```python
cloudwatch_logs_configuration_input: IResolvable | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `log_schema_version_input`<sup>Optional</sup> <a name="log_schema_version_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput"></a>

```python
log_schema_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: IResolvable | FisExperimentTemplateLogConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `log_schema_version`<sup>Required</sup> <a name="log_schema_version" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```python
log_schema_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---


### FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateLogConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---


### FisExperimentTemplateStopConditionsList <a name="FisExperimentTemplateStopConditionsList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateStopConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateStopConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FisExperimentTemplateStopConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>]

---


### FisExperimentTemplateStopConditionsOutputReference <a name="FisExperimentTemplateStopConditionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateStopConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>

---


### FisExperimentTemplateTargetsFiltersList <a name="FisExperimentTemplateTargetsFiltersList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateTargetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FisExperimentTemplateTargetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]

---


### FisExperimentTemplateTargetsFiltersOutputReference <a name="FisExperimentTemplateTargetsFiltersOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateTargetsFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>

---


### FisExperimentTemplateTargetsMap <a name="FisExperimentTemplateTargetsMap" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get"></a>

```python
def get(
  key: str
) -> FisExperimentTemplateTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[FisExperimentTemplateTargets]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>]

---


### FisExperimentTemplateTargetsOutputReference <a name="FisExperimentTemplateTargetsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceArns">reset_resource_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetSelectionMode">reset_selection_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[FisExperimentTemplateTargetsFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]

---

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_resource_arns` <a name="reset_resource_arns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceArns"></a>

```python
def reset_resource_arns() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_selection_mode` <a name="reset_selection_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetSelectionMode"></a>

```python
def reset_selection_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList">FisExperimentTemplateTargetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArnsInput">resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionModeInput">selection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionMode">selection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filters"></a>

```python
filters: FisExperimentTemplateTargetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList">FisExperimentTemplateTargetsFiltersList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[FisExperimentTemplateTargetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_arns_input`<sup>Optional</sup> <a name="resource_arns_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArnsInput"></a>

```python
resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `selection_mode_input`<sup>Optional</sup> <a name="selection_mode_input" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionModeInput"></a>

```python
selection_mode_input: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `selection_mode`<sup>Required</sup> <a name="selection_mode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionMode"></a>

```python
selection_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisExperimentTemplateTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>

---



